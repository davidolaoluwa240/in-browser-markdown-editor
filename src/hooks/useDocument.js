// Modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { documentSA } from "../store";

// Destructure Redux Imports
const { selectDocuments, selectIsLoading } = documentSA;

// Document Hook
export const useDocument = () => {
  const dispatch = useDispatch();
  const { documentId } = useParams();
  const documents = useSelector(selectDocuments);
  const isLoading = useSelector(selectIsLoading);
  const [document, setDocument] = useState(documents[0]);

  useEffect(() => {
    // Get Single Document Based On Param Document Id
    setDocument(
      documents.find((document) => document.id === documentId) || null
    );
  }, [documents, documentId]);

  return {
    dispatch,
    paramDocumentId: documentId,
    documents,
    isLoading,
    document,
    ...documentSA,
  };
};
