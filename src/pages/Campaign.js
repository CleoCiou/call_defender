import { CampaignButton } from "../components/styles/Button"
import { StyledCampaign, Blur, Circles, Title, Event, Download,
         Mascots, LeftMascots, RightMascots,
         EventTitle, EventParagraph,
         EventIntroduction, EventRules, EventRuleImage, EventAwards,  EventAwardsCards,
         DownloadTitle, DownloadParagraph, DownloadImages, Phone } from "../components/styles/Campaign.styled"

const Campaign = () => {
  return (
    <StyledCampaign>
      <Blur />
      <Circles />
      <Title>
        <h1>Call Defender X HKJunkCall</h1>
        <div>
          <img src='./images/campaign_title.svg' alt='' />
        </div>
        <CampaignButton>立即回報</CampaignButton>
      </Title>

      <Mascots>
        <LeftMascots>
          <img  src='./images/campaign_bear.svg' alt='' />
        </LeftMascots>
        <RightMascots>
          <img  src='./images/campaign_penguin.svg' alt='' />
        </RightMascots>
      </Mascots>

      <Event>
        <EventIntroduction>
          <EventTitle>活動介紹</EventTitle>
          <EventParagraph>
            強尼戴普（Johnny Depp）與前妻安珀赫德（Amber Heard）離婚後互控家暴和誹謗，強尼戴普聲勢上漲，反而是安珀赫德形象持續下滑，更被冠上「蛇蠍女」的稱號，還遭連署要求撤換角色，據悉，安珀赫德大為震怒，憤而開除公關團隊，找來強尼戴普的「舊敵人」上陣，此舉卻讓公關界直呼傻眼。
          </EventParagraph>
          <EventParagraph>
            據外媒《紐約時報》報導，安珀赫德和公關公司Precision Strategies合作多年，但因為近來社群網站上頻頻出現各種對她不利的文章，包括媒體頭條也都是負面的，形象大受影響，她不滿公關公司無法妥善處理，4月28日憤而開除多年戰友，改找另一家Shane Communications公關公司處理形象危機。強尼戴普（Johnny Depp）與前妻安珀赫德（Amber Heard）離婚後互控家暴和誹謗，強尼戴普聲勢上漲，反而是安珀赫德形象持續下滑，更被冠上「蛇蠍女」的稱號，還遭連署要求撤換角色，據悉，安珀赫德大為震怒，憤而開除公關團隊，找來強尼戴普的「舊敵人」上陣，此舉卻讓公關界直呼傻眼。
          </EventParagraph>
          <EventParagraph>
            據外媒《紐約時報》報導，安珀赫德和公關公司Precision Strategies合作多年，但因為近來社群網站上頻頻出現各種對她不利的文章，包括媒體頭條也都是負面的，形象大受影響，她不滿公關公司無法妥善處理，4月28日憤而開除多年戰友，改找另一家Shane Communications公關公司處理形象危機。
          </EventParagraph>
        </EventIntroduction>

        <EventRules>
          <div>
            <EventTitle>活動規則</EventTitle>
            <EventParagraph>
              強尼戴普（Johnny Depp）與前妻安珀赫德（Amber Heard）離婚後互控家暴和誹謗，強尼戴普聲勢上漲，反而是安珀赫德形象持續下滑，更被冠上「蛇蠍女」的稱號，還遭連署要求撤換角色，據悉，安珀赫德大為震怒，憤而開除公關團隊，找來強尼戴普的「舊敵人」上陣，此舉卻讓公關界直呼傻眼。
            </EventParagraph>
            <EventParagraph>
              據外媒《紐約時報》報導，安珀赫德和公關公司Precision Strategies合作多年，但因為近來社群網站上頻頻出現各種對她不利的文章，包括媒體頭條也都是負面的，形象大受影響，她不滿公關公司無法妥善處理，4月28日憤而開除多年戰友，改找另一家Shane Communications公關公司處理形象危機。強尼戴普（Johnny Depp）與前妻安珀赫德（Amber Heard）離婚後互控家暴和誹謗，強尼戴普聲勢上漲，反而是安珀赫德形象持續下滑，更被冠上「蛇蠍女」的稱號，還遭連署要求撤換角色，據悉，安珀赫德大為震怒，憤而開除公關團隊，找來強尼戴普的「舊敵人」上陣，此舉卻讓公關界直呼傻眼。
            </EventParagraph>
          </div>
          <EventRuleImage>
            <img src='./images/CasualMan_Megaphone.jpg' alt='' />
          </EventRuleImage>
        </EventRules>
        
        <EventAwards>
          <EventTitle>活動獎項</EventTitle>
          <EventAwardsCards>
            <div>
              <img src="https://picsum.photos/300/400/?random=10" />
            </div>
            <div>
              <img src="https://picsum.photos/300/400/?random=10" />
            </div>
            <div>
              <img src="https://picsum.photos/300/400/?random=10" />
            </div>
          </EventAwardsCards>
        </EventAwards>

        <CampaignButton>開始回報</CampaignButton>
      </Event>

      <Download>
        <div>
          <DownloadTitle>小熊來電已幫助百萬用戶讓通訊更加安心與便利</DownloadTitle>

          <DownloadParagraph>
            一款免費的電話攔截與辨識App，致力於保障用戶的通訊安全及防止騷擾電話。不論是惡意電話或是商業電話，都能在手機響起時，為你即刻攔截或辨識任何來電資訊。
          </DownloadParagraph>

          <DownloadImages>
            <img src='./images/google_play.png' alt='' />
            <img src='./images/app_store.png' alt='' />
          </DownloadImages>
        </div>

        <Phone>
          <img src='./images/phone.png' alt='' />
        </Phone>
      </Download>
    </StyledCampaign>
  )
}

export default Campaign
