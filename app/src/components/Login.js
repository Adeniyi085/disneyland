import styled from 'styled-components'


const Login = (props) => {
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src= "/images/cta-logo-one.svg" alt=""/>
                `````  {/* <SignUp>GET ALL THERE</SignUp>
                    <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                with a Disney+ subscription. As of 03/26/21, the price of Disney+
                and The Disney Bundle will increase by $1. 
                    </Description>````` */}
            </CTA>
            <BgImage />
        </Content>
    </Container>
    )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`
const Content = 
styled.div`
margin-bottom: 10vh;
width: 100%;
position: relative;
min-height:100%;
box-sizing: border-box;
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
padding:80px 40px;
height: 100%;
`
const BgImage = styled.div`
background-image: url("/images/login-background.jpg");
height: 100%;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
right:0;
left:0;
z-index: -1
`
const CTA = styled.div`
margin-bottom: 2vh;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;
`

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%
`
export default Login