
import "./Login.css";
import { useState } from "react";
import ProfilePicture from "../Image/ProfilePicture.png";


interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC = () => {

  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitting login data', loginData);
    // Perform login logic here, e.g. making a network request to an API
  };


  const styles = {

    
    container: {
      background: "#f5f4f4",
      width: "80%",
      minWidth: "400px",
      maxWidth: "900px",
      margin: "auto",
      padding: "30px 0",
      borderRadius: "20px",
      alignItems: "center",
      textAlign: "center"
    }
    
    
    ,
    title: {
      color: "black",
      fontWeight: 600,
      fontSize: "30px",
      marginBottom: "10px"
    },
    content: {
      width: "85%",
      margin: "auto",
      fontSize: "17px"
    },
    display: {
      paddingBlock: "15px"
    },
    statusText: {
      color: "rgb(46, 46, 46)",
      fontWeight: 800
    },
    card: {
      maxWidth: "100%"
    }
  } as const;

  return (
    <div style={styles.container}> 
    <div style={styles.title}>Login</div>
    <div className="box" >
    <form onSubmit={handleSubmit}>
  
    <img src={ProfilePicture} alt="ProfilePicture" width="150px" style={{margin: "30px 0", display: "block",  marginLeft: "auto", marginRight: "auto"}} />
      <div style={{margin: "30px 0"}}>
        <label style={{display: "block" ,fontWeight: "bold"}}>
          Username </label>
          <input type="text" name="username" value={loginData.username} onChange={handleInputChange} style={{display: "block", width: "80%", padding: "10px", margin: "10px 0", marginLeft: "auto", marginRight: "auto"}} />
        <label style={{display: "block",fontWeight: "bold"}}>
          Password
          </label>
          <input type="password" name="password" value={loginData.password} onChange={handleInputChange} style={{display: "block", width: "80%", padding: "10px", margin: "10px 0",  marginLeft: "auto", marginRight: "auto"}} />
  
        <button type="submit" style={{display: "block", width: "35%", padding: "12px", margin: "10px 0", background: "blue", color: "white", border: "none", borderRadius: "5px",  marginLeft: "auto", marginRight: "auto"}}>Login</button>
      </div>
      <div style={{textAlign: "center", margin: "30px 0"}}>
        <label style={{marginRight: "10px"}}>Forgot password?</label>
        <label>Register</label>
      </div>
  
    </form>
    </div>
    </div>
 
);
};


export default Login;
