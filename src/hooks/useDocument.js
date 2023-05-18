// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { documentSA } from "../store";

// Destructure Redux Imports
const { selectDocuments, selectIsLoading, selectActiveDocuments } = documentSA;

// Document Hook
export const useDocument = () => {
  const dispatch = useDispatch();
  const { documentId } = useParams();
  const documents = useSelector(selectDocuments);
  const activeDocuments = useSelector(selectActiveDocuments);
  const isLoading = useSelector(selectIsLoading);
  const [document, setDocument] = useState(documents[0] || null);

  useEffect(() => {
    // Get Single Document Based On Param Document Id
    setDocument(
      activeDocuments.find((document) => document.id === documentId) || null
    );
  }, [activeDocuments, documentId]);

  return {
    dispatch,
    activeDocumentId: documentId,
    documents,
    isLoading,
    document,
    activeDocuments,
    ...documentSA,
  };
};
