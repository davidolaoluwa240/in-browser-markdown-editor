// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { documentSA } from "../store";

// Destructure Redux Imports
const {
  selectLoadingType,
  selectIsLoading,
  selectActiveDocuments,
  selectError,
} = documentSA;

// Document Hook
export const useDocument = () => {
  const dispatch = useDispatch();
  const { documentId } = useParams();
  const documents = useSelector(selectActiveDocuments);
  const isLoading = useSelector(selectIsLoading);
  const loadingType = useSelector(selectLoadingType);
  const error = useSelector(selectError);
  const [document, setDocument] = useState(documents[0]);

  useEffect(() => {
    // Get Single Document Based On Param Document Id
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
