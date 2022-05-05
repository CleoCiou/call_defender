// css
import { Container, FlexContainer } from '../components/styles/Container';
import { StyledMain,
        Banner,
        DownloadIcon,
        CommunicationQuality,
        NewsGroup,
        SupportUsers,
        TrustworthyAssistant,
        Quantity } from '../components/styles/Main.styled';
import { Card, News, Description, Time, Feedback, Comment, Star, User } from '../components/styles/Card';

// data
import { news } from '../news.js';
import { comments } from '../comments.js';

const newsImgFolder = './images/';

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Banner>
          <div>
            <h1>小熊來電</h1>
            <p>是一款免費的電話攔截與辨識App，致力於保障用戶的通訊安全及防止騷擾電話。</p>
            <DownloadIcon>
              <img src='./images/google_play.png' alt='' />
              <img src='./images/app_store.png' alt='' />
            </DownloadIcon>
          </div>
          <div>
            <img src='./images/phone.png' alt='' />
          </div>
        </Banner>

        <CommunicationQuality>
          <h2>保障用戶通訊素質</h2>
          <FlexContainer as='ul' full col={{m: 1, d: 2}}>
            <FlexContainer as='li' justifyContent='center' full col={{m:1, d: 2}}>
              <img src='./images/icon-forbidden_call.svg' alt='' />
              <div>
                <h3>攔截騷擾來電</h3>
                <p>來電攔截功能讓你不再受到詐騙、推銷與廣告來電的騷擾。可選擇不攔截/掛斷，來電時會向你提供資訊，讓你選擇是否接聽。</p>
              </div>
            </FlexContainer>
            <FlexContainer as='li' justifyContent='center' full col={{m: 1, d: 2}}>
              <img src='./images/icon-social_contact.svg' alt='' />
              <div>
                <h3>辨識生活通訊</h3>
                <p>不只攔截，更能辨識公營或私人機構來電，包括醫院、學校與速遞等超過50萬個香港號碼，為你即時顯示來電對象。</p>
              </div>
            </FlexContainer>
          
            <FlexContainer as='li' justifyContent='center' full col={{m: 1, d: 2}}>
              <img src='./images/icon-double_database.svg' alt='' />
              <div>
                <h3>雙重防護資料庫</h3>
                <p>擁有 Whoscall 和 HKJunkCall 資料庫，每十分鐘更新「即時騷擾電話」，將最新的惡意號碼更新至手機，隨時杜絕騷擾來電。</p>
              </div>
            </FlexContainer>
          
            <FlexContainer as='li' justifyContent='center' full col={{m: 1, d: 2}}>
              <img src='./images/icon-scam_infomation.svg' alt='' />
              <div>
                <h3>獲取防詐資訊</h3>
                <p>App設置資訊中心，為用戶呈現即時專業的實用資訊，包含最新防詐及消費者教育訊息，時刻免於受騙風險。</p>
              </div>
            </FlexContainer>
          </FlexContainer>
        </CommunicationQuality>

        <NewsGroup>
          <h2>最新消息</h2>
          <FlexContainer full col={{ d: 3 }}>
            {
              news.map(({id, image, title, description, time}, index) => {
                return (
                <Card key={index}>
                  <News>
                    <img src={`${newsImgFolder}${image}`} alt='' />
                    <h4>{title}</h4>
                    <Description>{description}</Description>
                    <Time>{time}</Time>
                  </News>
                </Card>
                )
              })
            }
          </FlexContainer>
        </NewsGroup>
        
        <SupportUsers>
          <h2>小熊來電的支持用戶</h2>
          <FlexContainer full col={{ d: 3 }} alignItems='stretch'>
            {
              comments.map(({comment, userName}, index) => {
                return (
                <Card key={index}>
                  <Feedback>
                    <Comment>{comment}</Comment>
                    <Star src='./images/icon-stars.png' alt='' />
                    <User>{userName}</User>
                  </Feedback>
                </Card>
                )
              })
            }
          </FlexContainer>
        </SupportUsers>

        <TrustworthyAssistant>
          <h2>最值得信賴的來電助手</h2>
          <FlexContainer full>
            <div>
              <img src='./images/icon-number_of_downloads.png' alt='' />
              <Quantity>1,000K+</Quantity>
              <p>下載量</p>
            </div>
            <div>
              <img src='./images/icon-incoming_call.png' alt='' />
              <Quantity>500K+</Quantity>
              <p>來電號碼</p>
            </div>
            <div>
              <img src='./images/icon-google_play_rate.png' alt='' />
              <Quantity>4.8+</Quantity>
              <p>Google Play 評分</p>
            </div>
          </FlexContainer>
        </TrustworthyAssistant>
      </Container>
    </StyledMain>
  )
}

export default Main