export interface IUser {
  name: number;
  email: string;
  channels: Ichannel[];
}

export interface Ichannel {
  channelId: number;
  channelName: string;
  private: boolean;
}
