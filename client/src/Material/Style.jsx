import {alpha, makeStyles} from "@material-ui/core";
// import { blue, grey } from "@material-ui/core/colors";
export const SignupCss=makeStyles(theme=>({
    Title:{
        fontWeight:700,
        fontSize:"70px",marginBottom:"30px",
        [theme.breakpoints.down("sm")]:{
            fontSize:"55px"
        }
    },
    Text:{
        fontFamily:"sans-serif",fontStyle:"italic",fontWeight:400,
        marginBottom:"75px"
    },
    Options:{
        fontWeight:800,
    },
    IconsParent:{
        marginTop:theme.spacing(2),
        width:"100%"

    },
    Icons:{
        border:"1px solid white",
        marginRight:"10px",
        width:"37px",
        height:"37px",
        "&:hover":{
            backgroundColor:"white",color:"black"
        }
    }
    ,
    SocialMedia:{
        color:"white",
        "&:hover":{
            color:"black"
        }
    },
    // right portion
    ImgBox:{
        marginBottom:theme.spacing(7)
    },
    RightconTitle:{
        fontWeight:800,
        fontSize:"34px"
    },
    Form:{
        width:"370px",
        // border:"2px solid orange",
        marginTop:theme.spacing(8)
    },
    item:{
        // border:"1px solid red",
        position:"relative",
        marginBottom:theme.spacing(3)

    },
    Input:{width:"100%"},
 InputIcon:{
     position:"absolute",
     right:"3%",fontSize:"27px",
     top:"25%"
 },
 ItemBtn:{
    marginTop:theme.spacing(3)
,
padding:theme.spacing(1,0,1,0),
     display:"flex",justifyContent:"space-between",
     alignItems:"center"
 }
 ,
//  hidden 
HiddenIcons:{
    border:"1px solid blue",
    marginRight:"10px",
    width:"37px",
    height:"37px",
    "&:hover":{
        backgroundColor:"black",
    }
},
HiddenSocialMedia:{
    color:"black",
    "&:hover":{
        color:"white"
    }
},
}));

export const LoginCss=makeStyles(theme=>({
    
}));

export const HomeCss=makeStyles(theme=>({}));
