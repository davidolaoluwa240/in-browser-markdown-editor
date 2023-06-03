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
  // 1). Get Auth User Uid
  const { uid } = auth.currentUser;

  // 2). User Doc Ref
  const userRef = doc(userCollectionRef, uid);

  // 3). Perform Adding Document
  await addDoc(documentCollectionRef, {
    ...newDocument,
    isActive: true,
    user: userRef,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  // 4). Get Documents And Return Documents
  return await fetchDocuments();
});

/**
 * Fetch Documents
 * @param {boolean} activeDocuments Determine whether To Fetch Active Documents
 */
export const fetchDocuments = catchAsync(async (activeDocuments = true) => {
  // 1). Get Auth User Uid
  const { uid } = auth.currentUser;

  // 2). User Doc Ref
  const userRef = doc(userCollectionRef, uid);

  // 3). Create Document Query
  const documentQuery = query(
    documentCollectionRef,
    where("user", "==", userRef),
    where("isActive", "==", activeDocuments)
  );

  // 4). Get Documents
  const documentQuerySnapshot = await getDocs(documentQuery);

  // 5). Return Documents
  return firebaseLooper(documentQuerySnapshot);
});

/**
 * Update Document
 * @param {Object} updatedDocumentData
 */
export const updateDocument = catchAsync(async (updatedDocumentData) => {
  // 1). Get Document Data
  const { id, fileName, content, isActive } = updatedDocumentData;

  // 2). Document Doc Ref
  const documentRef = doc(documentCollectionRef, id);

  // 3). Perform Updating Document
  await updateDoc(documentRef, {
    ...(fileName && { fileName, content }),
    isActive,
    updatedAt: serverTimestamp(),
  });

  // 4). Get Documents And Return Documents
  return await fetchDocuments();
});

/**
 * Delete Document
 * @param {string} documentId
 */
export const deleteDocument = catchAsync((documentId) => {
  return updateDocument({ id: documentId, isActive: false });
});
