// Firebase
import {
  getDocs,
  query,
  where,
  updateDoc,
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
  // Get Auth User
  const { currentUser } = auth;

  if (currentUser) {
    const { uid } = currentUser;

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
  }

  // Return Empty Array
  return [];
});

// Sync Documents
export const syncDocuments = catchAsync(async (documents) => {
  // Create New Batch Transaction
  const batch = writeBatch(db);

  // Get Auth User
  const { currentUser } = auth;

  if (currentUser) {
    const { uid } = currentUser;

    // User Doc Ref
    const userRef = doc(userCollectionRef, uid);

    // Add Document To Batch
    documents.forEach((document) => {
      const docRef = doc(documentCollectionRef, document.id);

      batch.set(docRef, {
        ...document,
        user: userRef,
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
  const documentDocRef = doc(documentCollectionRef, documentId);

  // Perform Update
  await updateDoc(documentDocRef, {
    ...updatedDocumentData,
    user: userRef,
    updatedAt: serverTimestamp(),
  });

  // Get Documents
  const allDocuments = await fetchDocuments();

  // Return Documents
  return allDocuments;
});

// Delete Document
export const deleteDocument = catchAsync((documentId) => {
  return updateDocument({ isActive: false, id: documentId });
});
