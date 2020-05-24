import styled from 'styled-components';

export const Pagecontainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-items: center;
`;

export const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 10px;
`;

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagemContainer = styled.div`
  display: flex;
  min-width: 100px;
  flex-direction: row;
  margin-top: 20px;
  left: 0;
  align-items: center;
`;

export const UserName = styled.div`
  font: 24px Arial;
  font-weight: bold;
  color: #111;
`;

export const Rating = styled.div`
  font: 24px Arial;
  color: orange;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Imagem = styled.img`
  height: 100px;
  width: 100px;
  border: 4px solid #b66;
  border-radius: 8px;
  margin-right: 30px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-right: 8px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 3;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #999;
  border: 1px solid #999;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #999;
  border: 1px solid #999;
`;

export const UserInfo = styled.div`
  font: 18px Arial;
  color: #111;
  margin: 20px;
`;

export const BoldText = styled.div`
  font: 18px Arial;
  color: #111;
  font-weight: bold;
`;

export const EmailContainer = styled.div`
  margin-top: 20px;
`;

export const MessagesHeader = styled.div`
  font: 32px Arial;
  color: #111;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const MessageContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  height: 100px;
  width: 100%;
`;

export const MessageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageText = styled.div`
  margin: 10px 0 0 10px;
  font: 18px Arial;
  color: #111;
`;

export const MessageTitle = styled.div`
  margin: 10px 0 0 10px;
  font: 24px Arial;
  font-weight: bold;
  color: #111;
`;

export const MessageAvatar = styled.img`
  height: 80px;
  width: 80px;
  border: 2px solid #b66;
  border-radius: 40px;
`;
