// Firebase
import {
  getDocs,
  query,
  where,
  setDoc,
  doc,
  writeBatch,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import {
  documentCollectionRef,
  auth,
  userCollectionRef,
  firebaseLooper,
  db,
} from "../../utils";

// Utils
import { catchAsync } from "../../utils";

// Fetch Documents
export const fetchDocuments = catchAsync(async () => {
  // Get Auth User Uid
  const { uid } = auth.currentUser;

  // User Doc Ref
  const userRef = doc(userCollectionRef, uid);

  // Create Document Query
  const documentQuery = query(
    documentCollectionRef,
    where("user", "==", userRef),
    where("isActive", "==", true)
  );

  // Get Documents
  const documentQuerySnapshot = await getDocs(documentQuery);

  // Return Documents
  return firebaseLooper(documentQuerySnapshot);
});

// Sync Documents
export const syncDocuments = catchAsync(async (documents) => {
  if (documents.length) {
    // Fetch Documents
    const allDocuments = await fetchDocuments();

    // Create New Batch Transaction
    const batch = writeBatch(db);

    // Get Auth User Uid
    const { uid } = auth.currentUser;

    // User Doc Ref
    const userRef = doc(userCollectionRef, uid);

    // Add Document To Batch
    documents.forEach((document) => {
      const docRef =
        document.id !== "default"
          ? doc(documentCollectionRef, document.id)
          : doc(documentCollectionRef);

      // Get Cloud Document
      const cloudDocument = allDocuments.find((doc) => doc.id === document.id);

      // Determine If Current Document Should Sync
      const shouldSync = cloudDocument
        ? new Date(document.lastSavedLocal).getTime() >
          new Date(cloudDocument.updatedAt).getTime()
        : true;

      // Delete Inactive Documents
      !document.isActive && batch.update(docRef, { isActive: false });

      // Create Documents
      shouldSync &&
        batch.set(docRef, {
          ...document,
          user: userRef,
          id: null,
          createdAt: Timestamp.fromDate(new Date(document.createdAt)),
          updatedAt: Timestamp.fromDate(new Date(document.updatedAt)),
        });
    });

    // Commit Batch Transaction
    await batch.commit();
  }

  // Get Documents
  const allDocuments = await fetchDocuments();

  // Return Documents
  return allDocuments;
});

// Update Document
export const updateDocument = catchAsync(async (updatedDocumentData) => {
  // Get Document Id
  const documentId = updatedDocumentData.id;

  // Get Auth User
  const { uid } = auth.currentUser;

  // User Doc Ref
  const userRef = doc(userCollectionRef, uid);

  // Document Doc Ref
  const documentDocRef =
    documentId !== "default"
      ? doc(documentCollectionRef, documentId)
      : doc(documentCollectionRef);

  // Perform Update
  await setDoc(
    documentDocRef,
    {
      ...updatedDocumentData,
      user: userRef,
      id: null,
      createdAt: Timestamp.fromDate(new Date(updatedDocumentData.createdAt)),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  // Get Documents
  const allDocuments = await fetchDocuments();

  // Return Documents
  return allDocuments;
});

// Delete Document
export const deleteDocument = catchAsync((documentId) => {
  return updateDocument({ isActive: false, id: documentId });
});
