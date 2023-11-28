import { FunctionComponent } from "react";

import styles from "./page.module.css";
import Link from "next/link";
import Button from '@mui/material/Button'

const SignIn: FunctionComponent = () => {
    return (
        <div className={styles.signIn}>
            <div className={styles.cover}>
                <b className={styles.welcomeBack}>Welcome back!</b>
                <img className={styles.loginIcon} alt="" src="/login@2x.png" />
            </div>
            <div className={styles.form}>
                <div className={styles.buttons}>
                    <div className={styles.google}>
                        <img className={styles.googleIcon} alt="" src="/google.svg" />
                        <div className={styles.signInWith}><Link href="/about" >Sign In with Google Account</Link></div>
                    </div>
                    <div className={styles.facebook}>
                        <img
                            className={styles.googleIcon}
                            alt=""
                            src="/facebook-logo-2019.svg"
                        />
                        <div className={styles.signInWith}><Link href="/about" >Sign In with Facebook</Link></div>
                    </div>
                </div>
                <div className={styles.orSignIn}>
                    Or sign in with login and password
                </div>
                <div className={styles.iHaveAnContainer}>
                    <span className={styles.iHaveAn}>{`I have an account! `}</span>
                    <b className={styles.signUp}>Sign Up</b>
                </div>
                <div className={styles.copyright2023}>Copyright © 2023</div>
                <div className={styles.forgotPassword}>Forgot password?</div>
                <b className={styles.createYourAccount}>Create your Account</b>
                <div className={styles.label}>
                    <b className={styles.emailAddressOr}>Email address or username</b>
                    <div className={styles.inputField}>
                        <img
                            className={styles.vuesaxbolduserIcon}
                            alt=""
                            src="/vuesaxbolduser.svg"
                        />
                        <div className={styles.typeHere}>Type here</div>
                    </div>
                </div>
                <div className={styles.label1} inputMode="text">
                    <b className={styles.emailAddressOr}>Password</b>
                    <div className={styles.inputField1}>

                        <div className={styles.vuesaxboldlockParent}
                      
                        >
                            <img
                                className={styles.vuesaxbolduserIcon}
                                alt=""
                                src="/vuesaxboldlock.svg"
                            />
                            <div className={styles.div}>*****************</div>
                        </div>
                        <img
                            className={styles.vuesaxbolduserIcon}
                            alt=""
                            src="/vuesaxboldeyeslash.svg"
                        />
                    </div>
                </div>
                <div className={styles.checkbox} >
                    <div className={styles.checkboxChild} />
                    <Button variant="text" color="primary">
                   <div className={styles.typeHere}>Remember me</div>
                </Button>
                   
                </div>
                <div className={styles.google1}>
                    <div className={styles.signInWith}>Sign In</div>
                    <img
                        className={styles.vuesaxbolduserIcon}
                        alt=""
                        src="/vuesaxoutlinearrowright.svg"
                    />
                </div>
                <div className={styles.button}>
                    <img
                        className={styles.vuesaxbolduserIcon}
                        alt=""
                        src="/vuesaxoutlinearrowcircleleft.svg"
                    />
                    <div className={styles.typeHere}>Back</div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
