import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 400px;
    padding: 30px;
`

const LogoImg = styled.img`
    width: 300px;
    height: 150px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
`
    
const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 5px 20px;
  /* 이건 뭐지 */
  &::placeholder {
    font-size: 10px;
  }
  &[type="submit"] {
    cursor: pointer;
  }

`

const SubTitle = styled.p`
  font-size: 10px;
`

const SignupBtn = styled.div``

const ErrorMsg = styled.div``
    
const Guide = styled.span`
  /* 얘는 왜? */
  font-size: 9px;
  text-align: center;
  a {
    color: #389ef8;
    margin-left: 5px;
  }
`


export default () => {

    const navi = useNavigate();

    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = event;

        switch (name) {
            case "nickname":
                setNickName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const onSubmit = async() => {

        if (loading) return;
        if (nickName === "" || email === "" || password === "") {
            alert("회원 정보를 모두 입력해주세요");
        }
        try {

        } catch (error) {

        } finally {

        }
    }

    return (
        <Container>
            <LogoImg src={`${process.env.PUBLIC_URL}/DaelimX_Title.png`}/>
            <Form>
                <SubTitle>이름*</SubTitle>
                <Input
                  name="nickname"
                  onChange={onChange}
                  type="text"
                  placeholder="예) Daelim"
                />
                <SubTitle>이메일*</SubTitle>
                <Input
                  name="email"
                  onChange={onChange}
                  type="email"
                  placeholder="예) Daelim@email.daelim.ac.kr"
                />
                <SubTitle>비밀번호*</SubTitle>
                <Input
                  name="password"
                  onChange={onChange}
                  type="password"
                  placeholder="예) 6자리 이상 입력하세요"
                />
                <SignupBtn></SignupBtn>
                <ErrorMsg>{errorMsgGroups[error]}</ErrorMsg>
                <Guide>계정이 이미 있으신가요?
                    <Link to={"/signin"}>로그인</Link>
                </Guide>
            </Form>
        </Container>
    )
};

interface errorMsgGroupType {
    [key: string]: string;
}

const errorMsgGroups: errorMsgGroupType = {
    "auth/email-already-in-use": "이미 존재하는 회원입니다.",
    "auth/week-password": "비밀번호를 6자리 이상 입력하세요",
    "auth/invalid-email": "잘못된 이메일입니다.",
}