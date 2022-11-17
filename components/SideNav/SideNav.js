import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useCallback,
} from "react";
import { Container, Modal, Button, Dropdown } from "react-bootstrap";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NewReleases, Title } from "@material-ui/icons";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import AppContext from "../AppContext";
import _ from "loadsh";
import { BaseUrl } from "./Url";
var valuesVikas = "vvv";
function Navbar({ onClicks }) {
  const [sidebar, setSidebar] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(false);
  const [loginshow, setLoginshow] = useState(false);
  const [androidbutton, setandroidbutton] = useState(false);
  const [loginButton, setLoginButton] = useState(false);
  const [androidapk, setAndroidapk] = useState([]);
  const [phoneModel, setPhoneModel] = useState(false);
  const [BasicModel, setBasicModel] = useState(true);
  const [phoneOtp, setPhoneOtp] = useState(false);
  const [chooseUsername, setChooseUsername] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [numberOtp, setNumberOtp] = useState();
  const [loginUserName, setLoginUserName] = useState();
  const [navUserName, setNavUserName] = useState();
  const [uniqueUsername, setUniqueUsername] = useState();
  const [loginUserId, setLoginUserId] = useState();
  const [uniquename, setUniquename] = useState();
  const [phoneLoginUserName, setphoneLoginUserName] = useState();
  const [LoginUserImage, setLoginUserImage] = useState();
  const [currentCountry, setCurrentCountry] = useState();
  const [error, setError] = useState(false);
  const [onsuccess, setOnsuccesss] = useState(false);
  const [disable, setDisable] = useState(true);
  const [rtmp, setRtmp] = useState(false);
  const [myOptions, setMyOptions] = useState([]);
  const [myOptionsTitle, setMyOptionsTitle] = useState([]);
  const [descrption, setDescrption] = useState();
  const [gameName, setGameName] = useState();
  const [gameTitle, setGameTitles] = useState();
  const [gamedesc, setGamedescp] = useState();
  const [gameImg, setGameImg] = useState();
  const [thumbnamil, setThumbnail] = useState();
  const [generateStreamkey, setGenerateStreamkey] = useState("");
  const [generateRtmpLink, setGenerateRtmpLink] = useState("");
  const [loader, setLoader] = useState(false);
  const [imData, setImgData] = useState();
  const textAreaRef = useRef(null);
  const textAreaRef1 = useRef(null);
  const [gamemissing, setGamemissing] = useState(false);
  const [gameTitleMissing, setGameTitleMissing] = useState(false);
  const [network, setNetwork] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [showresetbutton, setShowResetButton] = useState(false);
  const [resetButtondisable, setresetbuttondisable] = useState(true);
  const [ip, setIP] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [userNamebuttonDisable, setuserNamebuttonDisable] = useState(true);
  const [apkcondition, setapkcondition] = useState(false);
  const [newUserId, setNewUserId] = useState();
  const [newUserName, setNewUserName] = useState();
  const [newUserImage, setNewUserImage] = useState();
  const [jagdeepSir, setJagdeepSir] = useState(
    "https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/navwhite/home.svg"
  );

  const [gamechoosename, setGamechoosename] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [reload, setReload] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [validQuery, setValidQuery] = useState(false);

  const Router = useRouter();

  const value = useContext(AppContext);

  useEffect(() => {
    // getUserdetails();
    getusersagent();
    getandroidapk();
  }, [newUserId]);

  useEffect(() => {
    if (reload == true) {
      window.location.reload();
    }
  }, [reload]);

  useEffect(() => {
    if (timeLeft === 0) {
      ////////console.log("TIME LEFT IS 0");
      setTimeLeft(null);
      setresetbuttondisable(false);
      setShowResetButton(true);
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  useEffect(() => {
    getViewData();
  }, []);
  const getViewData = async () => {
    const userValue = localStorage.getItem("userId");
    valuesVikas = userValue;
    // console.log("username id name is ",userValue)
    setUserLoggedIn(userValue);
  };
  const body = {
    user_id: 3832924,
  };

  const handleChange = (e) => {
    setValidQuery(false);
    let specials = /[*|\":<>[\]{}`\\;@&()$]/;
    let value = e.target.value;
    if (specials.test(value) === false) {
      let finalVal = value.trim();
      if (finalVal.length !== 0) {
        setValidQuery(true);
      }
      setSearchQuery(value);
    }
  };

  const searchFnc = () => {
    const user_id = localStorage.getItem("user_id");
    if (validQuery) {
      if (searchQuery.length >= 3) {
        Router.push({
          pathname: `/search/${searchQuery}&${user_id}`,
        });
        value.setIsSearched(!value.searched);
      } else {
        toast.error("search query must be atleast 3 characters long", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  const handleQuickLinks = () => {
    setSearchSuccess(false);
    setSearchQuery("");
    value.setIsSearched(!value.searched);
  };

  const getandroidapk = () => {
    axios
      .post(`${BaseUrl}.gamesee.tv/v2/latest-android-apk`, body, {
        headers: {
          Authorization:
            "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        ////////console.log("android apk data is", res.data.data);
        setAndroidapk(res.data.data);
      });
  };
  const getusersagent = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    ////////console.log("ip address found in india",res.data.country_name);
    setIP(res.data.country_name);
    // setIpcondition(true);
    // localStorage.setItem('country',res.data.country_name);

    var user_id = localStorage.getItem("user_id");
    setLoginUserId(user_id);
    var user_name = localStorage.getItem("userId");
    setLoginUserName(user_name);
    var nav_name = localStorage.getItem("user_name");
    setNavUserName(nav_name);
    var profile = localStorage.getItem("userImage");
    setLoginUserImage(profile);
    var country_name = localStorage.getItem("country");
    setCurrentCountry(country_name);
  };

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");

    e.target.focus();
  }

  function copyToClipboard1(e) {
    textAreaRef1.current.select();
    document.execCommand("copy");
    e.target.focus();
  }

  const handleClose2 = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=tv.gamesee&referrer=utm_source%3Dwebsite%26utm_medium%3Dhomepage%26utm_campaign%3Dwebsite_home%26anid%3Dadmob"
    );
    setShow(false);
  };
  const handleClose1 = () => {
    window.open(
      "https://apps.apple.com/app/apple-store/id1528939472?pt=118551813&ct=New%20Website%20download%20link&mt=8"
    );
    setShow(false);
  };

  const handleClose3 = async () => {
    abc1();
    setapkcondition(false);
  };
  const abc1 = () => {
    window.open(
      "https://www.gamesee.tv/faqs/how-to-install-gamesee-app-using-apk-"
    );
    let link = androidapk[0];
    window.location.href = link.android_apk_link;
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setRtmp(false);
    setBasicModel(false);
    setImgData("");
    setGamemissing(false);
    setGameTitleMissing(false);
    setBasicModel(false);
    setPhoneNumber("");
    setGameName("");
    setGameTitles("");
  };
  const showSidebar = () => {
    setSidebar(!sidebar);
    setToggle(!toggle);
  };
  const LoginActivity = () => {
    setLoginshow(true);
    // setLoginButton(!loginButton);
  };
  const loginClose = () => {
    setLoginshow(false);
    setBasicModel(true);
    setPhoneModel(false);
    setChooseUsername(false);
    setPhoneModel(false);
    setPhoneOtp(false);
    setPhoneNumber("");
  };
  const styles = {
    color: "red",
  };
  const openTermo = () => {
    window.open("https://www.gamesee.tv/terms-of-use");
  };
  const openPrivacyPolicy = () => {
    window.open("https://www.gamesee.tv/privacy-policy");
  };
  const phoneNumberClick = () => {
    setPhoneModel(true);
    setBasicModel(false);
  };
  const phoneOtpClick = () => {
    setTimeLeft(59);
    setShowResetButton(false);
    setresetbuttondisable(true);
    if (!phoneNumber) {
      alert("Enter Mobile Number");
    } else {
      let body = {
        a_id: "0",
        cc_code: "in",
        lc_code: "IN",
        phone_no: `+91${phoneNumber}`,
      };
      setPhoneOtp(true);
      setBasicModel(false);
      setPhoneModel(false);
      axios
        .post(`${BaseUrl}.gamesee.tv/v2/phone-login`, body, {
          headers: {
            Authorization:
              "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // console.log("Login phone number", res.data.data);
          // value.setGlobalLoggedInUserId(res?.data?.data?.user_id);
          setNewUserId(res.data.data.user_id);
          setNewUserName(res.data.data.user_name || res.data.data.userId);
          localStorage.setItem("user_name", res.data.data.user_name);
          if (res.data.data.user_image == "") {
            setNewUserImage(
              "https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/users.png"
            );
          } else {
            setNewUserImage(res.data.data.user_image);
          }
          //console.log("new user recods",res.data.data.user_name || res.data.data.userId)
          // localStorage.setItem('user_id', res.data.data.user_id);
          if (res.data.Success == 0) {
            axios
              .post(`${BaseUrl}.gamesee.tv/v2/register-phone`, body, {
                headers: {
                  Authorization:
                    "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
                  "Content-Type": "application/json",
                },
              })
              .then((res) => {
                // value.setGlobalLoggedInUserId(res.data.data.user_id);
                console.log("body.....", body);
                console.log("res......", res);
                setLoginUserId(res.data.data.user_id);
                localStorage.setItem("user_id", res.data.data.user_id);
                localStorage.setItem("user_name", res.data.data.user_name);
                console.log("292...");
                setPhoneOtp(true);
              });
          } else {
            if (!res.data.data.full_name || !res.data.data.user_name) {
              //console("login vikas ")
              setPhoneOtp(true);
            }
            // setphoneLoginUserName(res.data.data.full_name || res.data.data.user_name)
            // setLoginUserId(res.data.data.user_id);
            // localStorage.setItem('userId',res.data.data.full_name || res.data.data.user_name)
          }
        });
    }
  };
  const userNameChoose = () => {
    let body = {
      cc_code: "IN",
      lc_code: "en",
      a_id: "460",
      phone_no: `+91${phoneNumber}`,
      code: numberOtp,
    };
    axios
      .post(`https://devapi.gamesee.tv/v2/register-phone-verify`, body, {
        headers: {
          Authorization:
            "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        //console.log("otp verification records", res.data)
        //console.log("ores.data.data.user_idtp data",res.data.data);
        //////console.log("verification", res.data.Success);
        if (res.data.Success == 0) {
          setError(true);
        }
        if (res.data.Success == 1) {
          // console.log("data....",res);
          //  setLoginUserId(res.data.data.user_id);
          // setLoginUserName(res.data.data.user_name || res.data.data.userId);
          localStorage.setItem("user_id", newUserId);
          setLoginUserId(newUserId);
          // //console.log("phone number verify")
          localStorage.setItem("userId", newUserName);
          setLoginUserName(newUserName);
          localStorage.setItem("userImage", newUserImage);
          console.log("img......", newUserImage);
          setLoginUserImage(newUserImage);
          // value.setIdUserLoggedIn(121);
          value.setisLoggedin(true);
          // value.setGlobalLoggedInUserId(newUserId);
          ////console.log("login users details yeh hai ",loginUserId);
          if (loginUserId) {
            setChooseUsername(false);
            setPhoneOtp(false);
            setBasicModel(false);
            setPhoneModel(false);
            console.log("351....");
          } else if (!loginUserId) {
            axios
              .post(`https://devapi.gamesee.tv/v2/skip-social-register`, body, {
                headers: {
                  Authorization:
                    "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
                  "Content-Type": "application/json",
                },
              })
              .then((res) => {
                ////////console.log("Skip Social Register name", res)
                ////////console.log(" skip socail register verification", res.data.Success);
                if (res.data.Success == 1) {
                  setLoginUserId(res.data.data.user_id);
                  localStorage.setItem("user_id", res.data.data.user_id);
                  setChooseUsername(true);
                  setPhoneOtp(false);
                  setBasicModel(false);
                  setPhoneModel(false);
                  // value.setIdUserLoggedIn(121);
                  value.setisLoggedin(true);
                } else {
                  setChooseUsername(false);
                  setPhoneOtp(false);
                  setBasicModel(false);
                  setPhoneModel(false);
                  console.log("379....");
                }
              });
          } else {
            localStorage.setItem("userId", phoneLoginUserName);
            localStorage.setItem("");
            localStorage.setItem("user_id", loginUserId);
            setChooseUsername(true);
            setPhoneOtp(false);
            setBasicModel(false);
            setPhoneModel(false);
          }
        } else {
          setError(true);
        }
      });
  };
  const successfullysubmit = () => {
    let body = {
      user_id: loginUserId,
      userId: uniquename,
    };
    axios
      .post(`https://devapi.gamesee.tv/v2/update-user-name`, body, {
        headers: {
          Authorization:
            "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.Success == 1) {
          setLoginUserName(res.data.data.userId || res.data.data.full_name);
          localStorage.setItem(
            "userId",
            res.data.data.userId || res.data.data.full_name
          );
          localStorage.getItem(
            "userImage",
            "https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/gameicon.png"
          );
          // localStorage.setItem('user_id', res.data.data.user_id)
        }
      });
    setChooseUsername(false);
    setPhoneModel(false);
    setBasicModel(false);
    setPhoneOtp(false);
  };
  const enterMobile = (e) => {
    setPhoneNumber(e.target.value);
  };
  const responseGoogle = (response) => {
    if (response.profileObj.email) {
      let body = {
        cc_code: "In",
        lc_code: "end",
        a_id: "109090",
        user_name: response.profileObj.name,
        user_email: response.profileObj.email,
        user_gender: "",
        user_image: response.profileObj.imageUrl,
        dev_make: "",
        app_ver: "",
        android_ver: "",
        login_type: "",
        login_from: "",
        instance_id: response.googleId,
      };
      axios
        .post(`${BaseUrl}.gamesee.tv/v2/social-login`, body, {
          headers: {
            Authorization:
              "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          ////////console.log("Login record", res);
          ////////console.log("social login records status:-", res.data.Success);
          // if(res.data.data.)
          // if(res.data.Success)
          if (res.data.Success == 0) {
            // alert("Hello vikas");
            console.log("473.....");
            axios
              .post(`https://devapi.gamesee.tv/v2/social-register`, body, {
                headers: {
                  Authorization:
                    "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
                  "Content-Type": "application/json",
                },
              })
              .then((res) => {
                if (res.data.Success == 1) {
                  setLoginUserId(res.data.data.user_id);
                  localStorage.setItem("user_id", res.data.data.user_id);
                  setChooseUsername(true);
                  setBasicModel(false);
                } else {
                  setChooseUsername(false);
                  setPhoneModel(false);
                  setBasicModel(false);
                  setPhoneOtp(false);
                }
              });
          } else {
            if (
              res.data.data.full_name == null ||
              res.data.data.user_name == ""
            ) {
              setLoginUserId(res.data.data.user_id);
              localStorage.setItem("user_id", res.data.data.user_id);
              setLoginUserImage(res.data.data.user_profile);

              setChooseUsername(true);
              setBasicModel(false);
            } else {
              setLoginUserName(
                res.data.data.full_name || res.data.data.user_name
              );
              localStorage.setItem(
                "userId",
                res.data.data.userId || res.data.data.full_name
              );
              localStorage.setItem("user_id", res.data.data.user_id);
              // value.setGlobalLoggedInUserId(res?.data?.data?.user_id);
              localStorage.setItem("user_name", res.data.data.user_name);
              setLoginUserImage(res.data.data.user_profile);
              localStorage.setItem("userImage", res.data.data.user_profile);
              setBasicModel(false);
              setPhoneModel(false);
              setChooseUsername(false);
              // value.setIdUserLoggedIn(121);
              value.setisLoggedin(true);
            }
          }
        });
    }
  };
  const chooseUniqueName = (e) => {
    setUniqueUsername(e.target.value);
    let body = {
      user_id: loginUserId,
      user_name: e.target.value,
    };
    if (!/[^a-zA-Z]/.test(e.target.value)) {
      if (
        e.target.value.length >= 6 &&
        e.target.value.length <= 18 &&
        !e.target.value.includes("gamesee") &&
        !e.target.value.includes("Gamesee") &&
        e.target.value.trim()
      ) {
        axios
          .post(`https://devapi.gamesee.tv/v2/username-verification`, body, {
            headers: {
              Authorization:
                "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.data.Success == 1) {
              setUniquename(e.target.value);
              setuserNamebuttonDisable(true);
              setOnsuccesss(true);
              setuserNamebuttonDisable(false);
              setDisable(false);
            } else {
              setuserNamebuttonDisable(true);
              setOnsuccesss(false);
              setDisable(true);
            }
          });
      } else {
        setOnsuccesss(false);
        setuserNamebuttonDisable(true);
      }
    } else {
      setOnsuccesss(false);
      setuserNamebuttonDisable(true);
    }
  };
  const getDataFromAPI = (e) => {
    let body = {
      userid: 3832924,
      srch_txt: e.target.value,
    };
    // setGamechoosename(e.target.value);
    axios
      .post(`${BaseUrl}.gamesee.tv/v2/game-search`, body, {
        headers: {
          Authorization:
            "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        for (var i = 0; i < res.data.data.length; i++) {
          // console.log("game id choosen by..",res.data.data[i].gameName);
          myOptions.push(res.data.data[i].gamename);
        }
        setMyOptions(myOptions);
      });
  };
  const getTitleLocalStorage = (e) => {
    ////////console.log(e.target.value);
    setGameTitles(e.target.value);
  };
  const logout = () => {
    localStorage.clear();
    setReload(true);
    Router.push("/");

    // Router.push("/",  { shallow: true })
    // window.location.reload()
    // Router.push("/");
  };
  const enterMobileNumber = (e) => {
    setNumberOtp(e.target.value);
  };
  const enterPhoneNumber = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPhoneNumber(e.target.value);
      if (e.target.value.length === 10) {
        setDisable(false);
        setPhoneError(true);
      } else {
        setDisable(true);
        setPhoneError(false);
      }
    }
    ////////console.log("mobile number value length", e.target.value.length);
  };

  // const responseFacebook = (response) => {
  //   ////////console.log("facebooks details ", response);
  // }
  const rtmpgenerate = () => {
    // console.log("Mohit sir best pm")
    if (!gameName) {
      setGamemissing(true);
      setNetwork(false);
      setGameName("");
    } else if (!gameTitle) {
      setGameTitleMissing(true);
      setGamemissing(false);
      setNetwork(false);
    } else {
      // console.log("game hai");
      var user_id = localStorage.getItem("user_id");
      ////////console.log("login user_id", user_id);
      const formData = new FormData();
      // formData.append('image', thumbnamil);
      formData.append("user_id", user_id);
      formData.append("title", gameTitle);
      formData.append("description", gamedesc);
      formData.append("user_name", "..");
      formData.append("cc_code", "In");
      formData.append("game_id", gamechoosename);
      formData.append("lc_code", "Hin");
      formData.append("platform_type", "G");
      formData.append("platform_types", "W");
      // console.log("form data image",gamechoosename);
      // console.log("new form data",formData)
      setLoader(true);
      axios
        .post(
          `${BaseUrl}.gamesee.tv/v2/multi-streamlink-generation-v2`,
          formData,
          {
            headers: {
              Authorization:
                "cb70755a985f963d64ab1bb0541b0980e0edf54931f00c9f7760d17477a90d94",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // console.log("Thumbnail data for live streaming.....", res.data);
          if (res.data.Success == 1) {
            // console.log("mohit sir sady ha ")
            setRtmp(true);
            setGenerateRtmpLink(res.data.data.rtmp);
            setGenerateStreamkey(res.data.data.streamkey);
            setLoader(false);
          } else if (res.data.Success == 0) {
            // console.log("mohit sir sady ha ")
            setNetwork(true);
            setLoader(false);
            setGameTitleMissing(false);
            setGameName(false);
            setImgData("");
          }
        });
    }
  };
  const RtmpgenerateFinish = () => {
    setShow(false);
    setRtmp(false);
    setImgData("");
    setLoader(false);
    setNetwork(false);
    setGameName("");
    setGameTitles("");
    setGameTitleMissing(false);
    setGamemissing(false);
    setLoader(false);
  };
  const uploadingImage = (e) => {
    ////////console.log(e.target.files[0]);
    setThumbnail(e.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgData(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  const crossButtonclick = () => {
    setImgData("");
  };
  const openApk = () => {
    setapkcondition(true);
  };
  const handleCloseapk = () => {
    setapkcondition(false);
  };
  return (
    <>
      <div className="navbar1">
        <Container>
          <div className="inner-navbar">
            {/* <Link  className="menu-bars" href="/"> */}
            <div className="logo-area flex">
              <div>
                {toggle ? (
                  <img
                    className="gstoggle"
                    src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/toggle.svg"
                    onClick={showSidebar}
                    style={{ height: 20, width: 20 }}
                    alt="img"
                  ></img>
                ) : (
                  <img
                    className="gstoggle"
                    src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/cross.svg"
                    onClick={showSidebar}
                    style={{ height: 20, width: 20 }}
                    alt="logo"
                  ></img>
                )}
              </div>

              {/* </Link> */}
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              {/* Same as */}
              <ToastContainer />
              <Link href="/">
                <a>
                  <div>
                    <img
                      className="gslogo"
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/logo.png"
                      alt="logo"
                    ></img>
                  </div>
                </a>
              </Link>
            </div>
            <div className="serch-bar flex">
              <input
                type="text"
                placeholder="Search"
                className="serchbar-input"
                aria-label="Search"
                value={searchQuery || ""}
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    searchFnc();
                  }
                }}
              />
              <button className="serch-icon-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>

            <div className="navbar-right">
              {loginUserName ? (
                <Dropdown className="prfmen56">
                  <Dropdown.Toggle id="dropdown-basic">
                    {LoginUserImage ? (
                      <img
                        src={LoginUserImage}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/users.png";
                        }}
                        alt="login_user_image"
                      />
                    ) : (
                      <img
                        src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/users.png"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/users.png";
                        }}
                        alt="login_user_image"
                      />
                    )}
                    <span>{localStorage.getItem("user_name")}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href={"/profile"}>
                      View Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div
                  className="dwnldApp23 login79"
                  onClick={() => LoginActivity()}
                >
                  <button type="button">
                    {" "}
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/user93.png"
                      alt="user"
                    ></img>
                    {/* {loginUserName?loginUserName:
                     */}
                    <span className="lg132">Login</span>
                  </button>
                </div>
              )}
              <div className="dwnldApp23 hjk98" onClick={() => openApk()}>
                <button type="button">
                  {" "}
                  <img
                    src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/get+app.svg"
                    alt="get_app"
                  ></img>
                  <span>GET APP</span>
                </button>
              </div>
              {loginUserName ? (
                <div className="dwnldApp23 g56" onClick={() => handleShow()}>
                  <Player
                    autoplay
                    className="lottielive"
                    loop
                    src="https://assets9.lottiefiles.com/packages/lf20_52omjbxw.json"
                    style={{ height: "30px", width: "30px" }}
                  ></Player>
                  <span> Go Live</span>
                </div>
              ) : (
                <div className="dwnldApp23 g56" onClick={() => LoginActivity()}>
                  <Player
                    autoplay
                    className="lottielive"
                    loop
                    src="https://assets9.lottiefiles.com/packages/lf20_52omjbxw.json"
                    style={{ height: "30px", width: "30px" }}
                  ></Player>
                  <span> Go Live</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="navmenuitems" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link href="/">
              <div>
                <img
                  className="gstoggle"
                  src={jagdeepSir}
                  alt="icon"
                  onMouseOver={(e) =>
                    setJagdeepSir(
                      "https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/yellow/homey.svg"
                    )
                  }
                  onMouseOut={(e) =>
                    setJagdeepSir(
                      "https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/navwhite/home.svg"
                    )
                  }
                ></img>
              </div>
            </Link>
          </li>

          <ul className="navlink43">
            <li>
              {/* <Link href="/"> */}
              <Link href="/">
                <a>
                  <div className="nav234">
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/yellow/homey.svg"
                      alt="home"
                    ></img>
                    <span>HOME</span>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/games">
                <a>
                  <div className="nav234">
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/yellow/game.svg"
                      style={{ height: 20 }}
                      alt="games"
                    ></img>
                    <span>GAMES CATEGORIES</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/user-profile">
                <a>
                  <div className="nav234">
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/yellow/streamersy.svg"
                      style={{ height: 20 }}
                      alt="streamers"
                    ></img>
                    <span>STREAMERS</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/videos">
                <a>
                  <div className="nav234">
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/yellow/videosy.svg"
                      style={{ height: 20 }}
                      alt="videos"
                    ></img>
                    <span>VIDEOS</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/play-shorts">
                <a>
                  <div className="nav234">
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/yellow/shortsy.svg"
                      style={{ height: 20 }}
                      alt="shots"
                    ></img>
                    <span>SHOTS</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a>
                  <div className="nav234">
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/yellow/tournamenty.svg"
                      style={{ height: 20 }}
                      alt="tournaments"
                    ></img>
                    <span>TOURNAMENTS</span>
                  </div>
                </a>
              </Link>
            </li>
            {/* <li>
            
                 
                <Link  href="/">
                  <a>
                <div className="nav234">
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/navwhite/live.svg"
                      style={{ height: 20 }}
                      alt="img"
                    ></img>
                         <span>
                  HOW TO STREAM
                  </span>
                  </div>
                  </a>
                  </Link>
                 
                  
               
              </li> */}
            <li>
              <Link href="/mini-games">
                <a>
                  <div className="nav234">
                    <img
                      src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/yellow/streamersy.svg"
                      style={{ height: 20 }}
                      alt="mini_games"
                    ></img>
                    <span>PLAY MINI GAME</span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
      <Modal show={apkcondition} onHide={handleCloseapk}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/popup-mobile_03.png"
            alt="download_app"
          ></img>
        </Modal.Body>
        <Modal.Footer className="flex">
          <p>Download GameSee App</p>
          <Button onClick={handleClose2}>
            <img
              src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/popup-mobile_07.png"
              alt="get_on_google_play"
            ></img>
          </Button>
          <Button onClick={handleClose1}>
            <img
              src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/popup-mobile_09.png"
              alt="download_on_app_store"
            ></img>
          </Button>

          <Button onClick={handleClose3}>
            <img
              src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/download.png"
              alt="download_apk"
            ></img>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Rtmp model start  */}

      <Modal
        className="login490 fgh64"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <img
          className="loginbtm"
          src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/login_01_02.png"
          alt="login_modal"
        ></img>
        {rtmp ? (
          <Modal.Body>
            <h1>Lets Begin the stream</h1>
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_v0tbe2ds.json"
              style={{ height: "150px", width: "150px" }}
            ></Player>
            <div className="form244">
              <h3>Stream URL</h3>
              <input
                className="ffm0"
                value={generateRtmpLink}
                ref={textAreaRef}
                placeholder="Add title of your stream"
              ></input>
              <button className="copy-btn5" onClick={copyToClipboard}>
                <i className="fas fa-clone" aria-hidden="true" />
              </button>
            </div>
            <div className="form244">
              <h3>Stream Key</h3>
              <input
                className="ffm0"
                value={generateStreamkey}
                ref={textAreaRef1}
                placeholder="Add title of your stream"
              ></input>
              <button className="copy-btn5" onClick={copyToClipboard1}>
                <i className="fas fa-clone" aria-hidden="true" />
              </button>
            </div>

            <button className="sbmt4" onClick={RtmpgenerateFinish}>
              Done
            </button>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <h1>GO LIVE WITH RTMP</h1>

            <h3>
              Game <samp>*</samp>
            </h3>
            {/* Check here */}
            <Autocomplete
              // value={}
              freeSolo
              autoComplete
              autoHighlight
              options={myOptions}
              // getOptionLabel={option => console.log("amit......???",option)}
              renderInput={(params) => (
                // console.log("params....",params)
                <TextField
                  {...params}
                  onChange={(e) => getDataFromAPI(e)}
                  // value={}
                  variant="outlined"
                  placeholder="Choose Your Game"
                />
              )}
              onChange={(event, newValue) => {
                setGameName(newValue);
                setGamechoosename(newValue);
                ////////console.log("auto selected item values", JSON.stringify(newValue, null, ' '));
              }}
            />
            <h3>
              Title <samp>*</samp>
            </h3>
            <Autocomplete
              freeSolo
              autoComplete
              autoHighlight
              options={myOptionsTitle}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => getTitleLocalStorage(e)}
                  variant="outlined"
                  placeholder="Add title of your stream"
                />
              )}
            />
            <h3>Description</h3>
            <textarea
              placeholder="Add description of your stream"
              onChange={(e) => setGamedescp(e.target.value)}
            ></textarea>
            <h3>Upload thumbnail</h3>
            <div className="box13">
              {imData ? (
                <img
                  src={imData}
                  alt="thumbnail_img"
                  style={{ height: 50 }}
                ></img>
              ) : (
                <div>
                  <input
                    type="file"
                    placeholder="Upload Thumbnail"
                    onChange={(e) => uploadingImage(e)}
                  ></input>
                  <i
                    className="fas fa-cloud-upload-alt ewjo0"
                    aria-hidden="true"
                  />
                </div>
              )}
              {imData ? (
                <button onClick={crossButtonclick} className="dnek">
                  X
                </button>
              ) : null}
            </div>
            {gamemissing ? (
              <p style={{ color: "red" }}>Game Name Missing</p>
            ) : null}
            {gameTitleMissing ? (
              <p style={{ color: "red" }}>Game Title Missing</p>
            ) : null}

            {network ? (
              <p style={{ color: "red" }}>
                Something wrong into the server side
              </p>
            ) : (
              <span style={{ visibility: "hidden" }}>hidden</span>
            )}
            <p className="ppolicy3" onClick={() => setShow(false)}>
              By continuing, You agree to our<br></br>
              <Link href="/terms-of-use">Terms Of Use</Link> and{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
            <button className="sbmt4" onClick={rtmpgenerate}>
              Generate
            </button>

            {loader ? (
              <div className="spinn35" style={{ alignSelf: "center" }}>
                <i
                  className="fas fa-spinner fa-spin"
                  style={{ width: "auto" }}
                />
              </div>
            ) : null}
          </Modal.Body>
        )}
      </Modal>

      {/* Rtmp model closed  */}

      {/* Login Flow Start*/}
      {BasicModel ? (
        <Modal
          className="login490"
          show={loginshow}
          onHide={loginClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <img
            className="loginbtm"
            src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/login_01_02.png"
            alt="login_modal"
          ></img>
          <Modal.Body>
            <img
              className="img4589"
              src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/login-mobile_07.jpg"
              alt="logo"
            ></img>
            <p className="gk92">
              For a personalized experience, continue with your account
            </p>
            <GoogleLogin
              clientId="898137808822-ird80tbr3l1jiompvqhp25l9rb0p3ao8.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              className="glogin3"
              onFailure={responseGoogle}
            />

            {ip === "India" ? (
              <p className="p-login3">
                Or login via {/* <Link > */}
                <span onClick={phoneNumberClick}>Phone Number</span>
                {/* </Link> */}
              </p>
            ) : null}
            <p className="ppolicy3" onClick={() => setLoginshow(false)}>
              By continuing, You agree to our<br></br>
              <Link href="/terms-of-use">Terms Of Use</Link> and{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
          </Modal.Body>
        </Modal>
      ) : null}
      {phoneModel ? (
        <Modal
          className="login490 otp98"
          show={loginshow}
          onHide={loginClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton></Modal.Header>
          {/*         
  
            {phoneOtp?
  <Modal.Body>
    <img src="/images/nav/login-OTP-mobile_03.png" alt="img"></img>
    <h3>Enter OTP Number</h3>
    <samp>Fill Accurate Pin Code </samp>
    <input
      type="text"
      maxLength={6}
      placeholder="Enter OTP"
      value={numberOtp}
      onChange={(e) => enterMobileNumber(e)}
    ></input>
    <samp>
      Resend OTP in <span>59s</span>
    </samp>
    <p>
      Didn’t recieve code? <Link to="#">Resend OTP</Link>
    </p>
          {error?
          <p style={{color:'red'}}>OTP mismatched</p>:null  
        }
    <Button className="sbmt4" onClick={userNameChoose}>
      Submit
    </Button>
  </Modal.Body>
            : */}
          <img
            className="login-btm"
            src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/login_01_02.png"
            alt="password"
          ></img>
          <Modal.Body>
            <img
              src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/login-OTP-mobile_03.png"
              alt="logo"
            ></img>
            <h3>Enter Phone Number</h3>
            <samp>An OTP will be sent on your Mobile</samp>
            <div className="us597">
              <input
                // type="Number"
                placeholder="Enter Phone Number"
                maxLength={10}
                minLength={10}
                value={phoneNumber}
                onChange={(e) => enterPhoneNumber(e)}
                // onKeyUp={(e)=>enterPhoneNumber(e)}
              ></input>
              {phoneError ? (
                <i className="fas fa-check" aria-hidden="true" />
              ) : null}
            </div>

            {/* <span style={{color:'red'}}>Please Enter valid Mobile Number</span>:<span className="nullText123">mobile number</span>} */}
            <Button
              className="sbmt4"
              disabled={disable}
              onClick={phoneOtpClick}
            >
              Submit
            </Button>
          </Modal.Body>
        </Modal>
      ) : null}
      {phoneOtp ? (
        <Modal
          className="login490 otp98"
          show={loginshow}
          onHide={loginClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <img
            className="login-btm"
            src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/login_01_02.png"
            alt="43"
          ></img>
          <Modal.Body>
            <img
              src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/login-OTP-mobile_03.png"
              alt="logo"
            ></img>
            <h3>OTP Sent to {phoneNumber}</h3>

            <input
              type="text"
              placeholder="Enter OTP"
              minLength={6}
              maxLength={6}
              onChange={(e) => setNumberOtp(e.target.value)}
            ></input>
            {showresetbutton ? null : (
              <samp>
                Resend OTP in <span className="g45">{timeLeft}s</span>
              </samp>
            )}
            <p className="gr5">
              {/* {////////console.log("new button position ",disable)} */}
              Didn’t recieve code?
              <Button
                onClick={() => phoneOtpClick()}
                disabled={resetButtondisable}
              >
                {" "}
                Resend OTP{" "}
              </Button>
            </p>
            {error ? (
              <p style={{ color: "#e12525", fontWeight: "600", margin: "0px" }}>
                OTP mismatched
              </p>
            ) : null}
            <Button className="sbmt4" onClick={userNameChoose}>
              Submit
            </Button>
          </Modal.Body>
        </Modal>
      ) : null}
      {chooseUsername ? (
        <Modal
          className="login490 otp98"
          show={loginshow}
          onHide={loginClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <img
            className="login-btm"
            src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/login_01_02.png"
            alt="img"
          ></img>
          <Modal.Body>
            <img
              src="https://lh5.googleusercontent.com/proxy/jHfWo8WNRobTVqpBp8RtlQGn4BqUilxHQIvIT2SrJ5jT06XEsjl0j2wQ3KTN_HmrqeSySFxWpZ4zyTO_6suqYoe6C5ugLTMvtgRLpOg8_y3WMW0DT8zmiaRBoDiuPhig4-mi6yEEsqyiO1bV2w"
              alt="r"
            ></img>
            <samp>Choose username</samp>
            <p>Pick the unique username</p>
            <div className="us597">
              <input
                type="text"
                placeholder="Enter username"
                maxLength={18}
                onChange={(e) => chooseUniqueName(e)}
              ></input>
              {onsuccess ? (
                <i className="fas fa-check" aria-hidden="true" />
              ) : null}
            </div>

            <Button
              className="sbmt4"
              disabled={userNamebuttonDisable}
              onClick={successfullysubmit}
            >
              Submit
            </Button>
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
}
export default Navbar;
