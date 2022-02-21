import React,{useState,useEffect} from 'react'
import "./Login.css"
import { Elements } from "../Material/ELements"
import { Icons } from "../Material/Icons"
import { SignupCss } from "../Material/Style"
import {Login as Pro} from "../Redux/ApiCall"
import {useDispatch} from "react-redux"
import Logo from "./logo.png";
import { Link } from "react-router-dom"
function Login() {
  const dispatch=useDispatch();

    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    
    const [btnDisable,setbtnDisable]=useState(true);
    const SignUpButton=()=>{
        if(!Email.endsWith(".com") || !Email.includes("@")){
            alert("email is invalid...")
    
        }else{
            const obj={
               email: Email,password:Password
            }
    Pro(dispatch,obj)
            
            setEmail('');
            setPassword('');
        }
       
    }
    useEffect(()=>{
        Authentication()
    },[Email,Password])
function Authentication(){
    if(Email==='' ||Email===undefined){
        setbtnDisable(true);
    }
    
    if(Password==='' ||Password===undefined){
        setbtnDisable(true);

    }else{
        setbtnDisable(false)
    }
}
    const style = SignupCss();
    return <div className='signUp'>
        <div className="signUp-Container md-container sm-conatiner xs-container">
            <div className="signUpLeft dm-variant1">
                <div className="leftbackgorund overlay overlay-plus extra-overlay">
                    <div className="leftContainer">
                        <Elements.Heading variant='h2' className={style.Titlse}>Welcome to</Elements.Heading>
                        <Elements.Heading variant='h2' component={"h3"} className={style.Title} >Dashboard</Elements.Heading>
                        <Elements.Heading variant='h5' className={style.Text}>Login into Your Account</Elements.Heading>
                        <div className="lineTag"></div>
                        <Elements.Heading variant='span' className={style.Options}>or SignUp with</Elements.Heading>
                        <Elements.Div className={style.IconsParent}>
                            <Elements.IconBtn className={style.Icons}>
                                <Icons.Facebook className={style.SocialMedia} />
                            </Elements.IconBtn>
                            <Elements.IconBtn className={style.Icons}>
                                <Icons.Twitter className={style.SocialMedia} />
                            </Elements.IconBtn>
                            <Elements.IconBtn className={style.Icons}>
                                <Icons.LinkedIn className={style.SocialMedia} />
                            </Elements.IconBtn>
                        </Elements.Div>
                    </div>

                </div>
            </div>
            <div className="signUpRight dm-variant">
                <div className="signUp-container">
                    <Elements.Div className={style.ImgBox}>
                        <img src={Logo} alt="Logo" />
                    </Elements.Div>
                    <Elements.Heading variant='h4' className={style.RightconTitle}>
                        Login
                    </Elements.Heading>
                    <Elements.Heading variant='body1' component={"span"}>
                        Already have an account? <Link to="/" style={{ textDecoration: "none", fontWeight: 700, fontSize: "19px" }}>Create it here</Link>
                    </Elements.Heading>
                    <div className={style.Form}>
                
                        <div className={style.item}>
                            <Elements.Textinput value={Email} type="email" onChange={(e)=>{setEmail(e.target.value)}} variant='outlined' label="Enter Email" className={style.Input}  />
                            <Icons.Email className={style.InputIcon} />
                        </div>
                        <div className={style.item}>
                            <Elements.Textinput type={"password"} value={Password} onChange={(e)=>{setPassword(e.target.value)}} variant='outlined' label="Enter Password" className={style.Input}  />
                            <Icons.Password className={style.InputIcon} />
                        </div>
                        <div className={style.ItemBtn}>
                            <Elements.Heading variant='body1'>
                                
                            </Elements.Heading>
                            <Elements.Btn
                            size="medium"
                            color="primary"
                            variant='outlined'
                            disabled={btnDisable?true:false}
                            onClick={SignUpButton}
                            endIcon={<Icons.Next/>}
                            >
Login
                            </Elements.Btn>
                        </div>
                        <div className="hiiden">
                        <Elements.Div className={style.IconsParent}>
                            <Elements.IconBtn className={style.HiddenIcons}>
                                <Icons.Facebook className={style.HiddenSocialMedia} />
                            </Elements.IconBtn>
                            <Elements.IconBtn className={style.HiddenIcons}>
                                <Icons.Twitter className={style.HiddenSocialMedia} />
                            </Elements.IconBtn>
                            <Elements.IconBtn className={style.HiddenIcons}>
                                <Icons.LinkedIn className={style.HiddenSocialMedia} />
                            </Elements.IconBtn>
                        </Elements.Div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login