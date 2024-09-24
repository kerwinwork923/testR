import{e as C,a as v,_,b as f,c as V,d as w}from"./CgJEk73C.js";import{_ as L,r as l,J as y,v as b,K as x,L as h,x as o,y as G,M as p,N as k,O as H,z as g,A as u,g as M,t as m,B as I}from"./BcScjow9.js";import{a as P}from"./BimPEqV4.js";const B="data:image/svg+xml,%3csvg%20width='21'%20height='22'%20viewBox='0%200%2021%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M14.9062%200.5796C14.4469%200.738975%2014.1094%201.08116%2013.95%201.54523C13.8844%201.73741%2013.875%202.05148%2013.875%203.83273V5.89523L13.9922%206.00773C14.1281%206.14835%2014.3391%206.15773%2014.4891%206.03585L14.6016%205.94679L14.625%203.83741C14.6484%201.79835%2014.6531%201.72335%2014.7469%201.59679C14.7984%201.52648%2014.9016%201.42335%2014.9719%201.37179C15.0984%201.27804%2015.1687%201.27335%2017.5875%201.24991L20.0719%201.22647L20.1609%201.11398C20.2828%200.963975%2020.2734%200.753037%2020.1328%200.6171L20.0203%200.499912H17.5687C15.4641%200.5046%2015.0891%200.513975%2014.9062%200.5796Z'%20fill='%23666666'/%3e%3cpath%20id='Vector_2'%20d='M5.96248%206.95C2.20779%209.72968%200.787476%2010.8078%200.768726%2010.8875C0.754663%2010.9484%200.754663%2011.0516%200.768726%2011.1125C0.806226%2011.2719%2011.025%2018.8422%2011.2359%2018.8656C11.3484%2018.8797%2011.414%2018.8562%2011.5031%2018.7625L11.625%2018.6453V16.8828V15.125H15.0703H18.5203L18.6328%2015.0078L18.75%2014.8953V11V7.10468L18.6328%206.99219L18.5203%206.875H15.0703H11.625V5.15937C11.625%203.95%2011.6109%203.41562%2011.5687%203.34531C11.4937%203.2%2011.3859%203.12969%2011.2453%203.125C11.1609%203.125%209.70779%204.175%205.96248%206.95ZM11.0109%207.53594C11.114%207.62031%2011.2453%207.625%2014.5594%207.625H18V11V14.375H14.5547H11.1047L10.9922%2014.4922L10.875%2014.6047V16.1797V17.7547L10.5375%2017.5016C10.35%2017.3656%209.34216%2016.6156%208.29685%2015.8469C2.8031%2011.7781%201.80466%2011.0328%201.80466%2011C1.80466%2010.9672%202.75623%2010.2594%208.36716%206.10156C9.44998%205.3%2010.4531%204.55937%2010.5937%204.45625L10.8515%204.26406L10.875%205.85312L10.8984%207.44687L11.0109%207.53594Z'%20fill='%23666666'/%3e%3cpath%20id='Vector_3'%20d='M13.9922%2015.9921L13.875%2016.1046V18.1624C13.875%2020.464%2013.8797%2020.4968%2014.1984%2020.9187C14.3063%2021.064%2014.475%2021.1999%2014.6719%2021.3078L14.9766%2021.4765L17.4609%2021.4906C19.2984%2021.4999%2019.9688%2021.4906%2020.0484%2021.4484C20.2031%2021.364%2020.2734%2021.1578%2020.2078%2020.989C20.175%2020.9187%2020.1047%2020.8343%2020.0484%2020.8015C19.9781%2020.764%2019.2141%2020.7453%2017.5219%2020.7359C15.1594%2020.7265%2015.0984%2020.7265%2014.9719%2020.6281C14.9016%2020.5765%2014.7984%2020.4734%2014.7469%2020.4031C14.6531%2020.2765%2014.6484%2020.2015%2014.625%2018.1624L14.6016%2016.0531L14.4891%2015.964C14.3391%2015.8421%2014.1281%2015.8515%2013.9922%2015.9921Z'%20fill='%23666666'/%3e%3c/g%3e%3c/svg%3e",A={setup(){const i=l("會員登入"),s=l(!1),n=l(""),t=l(""),a=l(!1),d=y();return{verificationTitle:i,passwordVisible:a,togglePasswordVisibility:()=>{a.value=!a.value},eyesCloseGreen:C,eyesOpenGreen:v,loading:s,mobile:n,password:t,login:async()=>{s.value=!0;try{const e=await P.post("https://23700999.com:8081/HMA/API_AA1.jsp",{Mobile:n.value,Password:t.value});e.status===200&&(e.data.Token.trim()!==""&&e.data.MAID.trim()!==""?(console.log("登入成功:",e.data),s.value=!1,d.push({name:"user"})):(alert(`登入失敗 : ${e.data.Result}`),s.value=!1))}catch{alert("登入失敗，請檢查手機號碼和密碼。")}finally{s.value=!1}}}}},N={class:"login"},T={class:"loginGroup"},D={class:"raphaelIconImgGroup"},Z={class:"loginWrap"},O={class:"loginBox"},R={class:"phoneGroup"},U={class:"passwordGroup"},j=["type"],z=["src"],E={class:"forgetPassword"},J={class:"bottomHintGroup"};function K(i,s,n,t,a,d){const c=w,r=M("router-link");return m(),b("div",N,[t.loading?(m(),x(c,{key:0})):h("",!0),o("div",T,[o("div",D,[s[5]||(s[5]=o("img",{class:"raphaelIcon",src:_,alt:""},null,-1)),o("h1",null,G(t.verificationTitle),1)]),o("div",Z,[o("div",O,[o("div",R,[p(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>t.mobile=e),placeholder:"請輸入您的手機號碼"},null,512),[[k,t.mobile]]),s[6]||(s[6]=o("img",{class:"icon1",src:f,alt:""},null,-1))]),o("div",U,[p(o("input",{type:t.passwordVisible?"text":"password","onUpdate:modelValue":s[1]||(s[1]=e=>t.password=e),placeholder:"請輸入密碼",onInput:s[2]||(s[2]=(...e)=>i.validatePassword&&i.validatePassword(...e))},null,40,j),[[H,t.password]]),s[7]||(s[7]=o("img",{class:"icon1",src:V,alt:""},null,-1)),o("img",{class:"icon2",src:t.passwordVisible?t.eyesOpenGreen:t.eyesCloseGreen,onClick:s[3]||(s[3]=(...e)=>t.togglePasswordVisibility&&t.togglePasswordVisibility(...e)),alt:""},null,8,z)])]),s[10]||(s[10]=o("div",{class:"privacyGroup"},[o("input",{type:"checkbox",id:"privacyInput"}),o("label",{for:"privacyInput"},"我已詳細閱讀隱私權政策")],-1)),o("div",E,[g(r,{to:"#"},{default:u(()=>s[8]||(s[8]=[I("忘記密碼?")])),_:1})]),o("button",{class:"loginBtn",onClick:s[4]||(s[4]=(...e)=>t.login&&t.login(...e))},"登入"),o("div",J,[g(r,{to:"/register"},{default:u(()=>s[9]||(s[9]=[o("img",{class:"icon",src:B,alt:""},null,-1),o("h5",null,"註冊會員",-1)])),_:1})])])])])}const F=L(A,[["render",K],["__scopeId","data-v-bca6aaa8"]]);export{F as default};
