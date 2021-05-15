import { auth } from '../firebase/config';

const useSignIn = () => {
	auth.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode + ':' + errorMessage);
		});
	return { user };
};

export default useSignIn;
