// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { documentSA } from "../store";

// Destructure Redux Imports
const { selectLoadingType, selectIsLoading, selectDocuments, selectError } =
  documentSA;

// Document Hook
export const useDocument = () => {
  const dispatch = useDispatch();
  const { documentId } = useParams();
  const documents = useSelector(selectDocuments);
  const isLoading = useSelector(selectIsLoading);
  const loadingType = useSelector(selectLoadingType);
  const error = useSelector(selectError);
  const [document, setDocument] = useState(documents[0]);

  useEffect(() => {
    // Get Single Document
    setDocument(documents.find((document) => document.id === documentId));
  }, [documents, documentId]);

  return {
    dispatch,
    documentId,
    documents,
    document,
    isLoading,
    loadingType,
    error,
    ...documentSA,
  };
};
