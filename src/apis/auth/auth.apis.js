// Firebase
import { setDoc, Timestamp, doc, getDoc } from "firebase/firestore";
import {
  signInWithPopup,
  linkWithCredential,
  getAdditionalUserInfo,
  onAuthStateChanged,
  signOut,
  OAuthProvider,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import {
  googleProvider,
  githubProvider,
  auth,
  userCollectionRef,
  dataFromSnapshot,
} from "../../utils";

// Utils
import { catchAsync } from "../../utils";

/**
 * Get Auth User
 */
export const getUser = catchAsync(async () => {
  // 1). Get User Id
  const userId = auth.currentUser.uid;

  // 2). Create Doc Reference
  const userRef = doc(userCollectionRef, userId);

  // 3). Get User Doc
  const userSnapshot = await getDoc(userRef);

  // 4). Return User Document
  return dataFromSnapshot(userSnapshot);
});

/**
 * Create New User Document
 * @param {object} userCredential Firebase user credential
 */
export const createNewUserDocument = catchAsync(async (userCredential) => {
  // 1). Create User Data
  const {
    uid,
    email,
    displayName,
    emailVerified,
    photoURL,
    metadata: { creationTime },
  } = userCredential.user;
  const userData = {
    uid,
    email,
    displayName,
    emailVerified,
    avatarUrl: photoURL,
    createdAt: Timestamp.fromDate(new Date(creationTime)),
  };

  // 2). Create Doc Reference
  const userRef = doc(userCollectionRef, uid);

  // 3). Create User Document
  return await setDoc(userRef, userData);
});

/**
 * Link User OAuth Provider
 * @param {Object} err Error
 */
export const linkOAuthProvider = catchAsync(async (err) => {
  // 1). Get Pending Credential
  const pendingCred = OAuthProvider.credentialFromError(err);

  // 2). Get Provider Email
  const email = err.customData.email;

  // 3). Fetch SignIn Method For Email
  const userSignInMethod = await fetchSignInMethodsForEmail(auth, email);

  // 4). Get Provider Service
  const providerService = userSignInMethod[0].includes("google")
    ? googleProvider
    : githubProvider;

  // 5). Signup/SignIn With Popup Using The Provider Service
  const { user } = await signInWithPopup(auth, providerService);

  // 6). Link Provider With Pending Credential
  await linkWithCredential(user, pendingCred);

  // 7). Get User
  const userProfile = await getUser();

  // 8). Return User Profile
  return userProfile;
});

/**
 * Signup/Login User With OAuth Provider
 * @param {string} provider Provider
 */
export const signupWithOAuth = catchAsync(async (provider = "google") => {
  // 1). Determine Provider Service For Authentication
  const providerService =
    provider === "google" ? googleProvider : githubProvider;

  // 2). Signup/SignIn With Popup Using The Provider Service
  const userCredential = await signInWithPopup(auth, providerService);

  //  3). Get Additional User Information
  const additionalUserInfo = getAdditionalUserInfo(userCredential);

  // 4). Check If User Is A New User. If Yes, Create New User Document In Firestore, If Not Get User And Return The User.
  if (additionalUserInfo.isNewUser) {
    await createNewUserDocument(userCredential);
  }

  // Get User
  const userProfile = await getUser();

  // Return User Profile
  return userProfile;
});

/**
 * Initialize Authentication
 */
export const initializeAuth = () =>
  new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(
      auth,
      async (userAuth) => {
        unSubscribe();
        !userAuth && resolve(userAuth);
        userAuth && resolve(await getUser());
      },
      reject
    );
  });

/**
 * Logout Authenticated User
 */
export const logoutUser = catchAsync(async () => {
  await signOut(auth);
});
