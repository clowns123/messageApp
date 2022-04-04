import styled from "styled-components";

export const ChannelWapper = styled.div`
  display: flex;
  flex-flow: column;
  overflow: auto;
  position: relative;
`;

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 206px);
`;

export const ChatBoxWapperStyle = styled.div`
  bottom: 0;
  width: 100%;
`;

export const ChatZone = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;
