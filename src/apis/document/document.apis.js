// Firebase
import {
  getDocs,
  query,
  where,
  doc,
  serverTimestamp,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import {
  documentCollectionRef,
  auth,
  userCollectionRef,
  firebaseLooper,
} from "../../utils";

// Data
import { DEFAULT_DOCUMENT_ITEM } from "../../data";

// Utils
import { catchAsync } from "../../utils";

/**
 * Add Default Document
 */
export const addDefaultDocument = catchAsync(async () => {
  return await addDocument(DEFAULT_DOCUMENT_ITEM);
});

/**
 * Add New Document
 * @param {Object} newDocument
 */
export const addDocument = catchAsync(async (newDocument) => {
  // Get Auth User Uid
  const { uid } = auth.currentUser;

  // User Doc Ref
  const userRef = doc(userCollectionRef, uid);

  // Perform Adding Document
  await addDoc(documentCollectionRef, {
    ...newDocument,
    isActive: true,
    user: userRef,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  // Get Documents
  const allDocuments = await fetchDocuments();

  // Return Documents
  return allDocuments;
});

/**
 * Fetch Documents
 * @param {boolean} activeDocuments Determine whether To Fetch Active Documents
 */
export const fetchDocuments = catchAsync(async (activeDocuments = true) => {
  // Get Auth User Uid
  const { uid } = auth.currentUser;

  // User Doc Ref
  const userRef = doc(userCollectionRef, uid);

  // Create Document Query
  const documentQuery = query(
    documentCollectionRef,
    where("user", "==", userRef),
    where("isActive", "==", activeDocuments)
  );

  // Get Documents
  const documentQuerySnapshot = await getDocs(documentQuery);

  // Return Documents
  return firebaseLooper(documentQuerySnapshot);
});

/**
 * Update Document
 * @param {Object} updatedDocumentData
 */
export const updateDocument = catchAsync(async (updatedDocumentData) => {
  // Get Document Id
  const { id } = updatedDocumentData;

  // Document Doc Ref
  const documentDocRef = doc(documentCollectionRef, id);

  // Perform Update
  await updateDoc(documentDocRef, {
    ...updatedDocumentData,
    updatedAt: serverTimestamp(),
  });

  // Get Documents
  const allDocuments = await fetchDocuments();

  // Return Documents
  return allDocuments;
});

/**
 * Delete Document
 * @param {Object} deletedDocument
 */
export const deleteDocument = catchAsync((deletedDocument) => {
  return updateDocument({ ...deletedDocument, isActive: false });
});
