import { Ichannel, IUser } from 'types/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { CollapseButton } from '@components/MessageList/styles';

const ChannelList: FC = () => {
  const { workspace } = useParams<{ workspace?: string }>();
  const { data: userData } = useQuery<IUser | false>('user', () => fetcher({ queryKey: '/api/users' }), {});
  const { data: channelData } = useQuery<Ichannel[]>(
    ['workspace', workspace, 'channel'],
    () => fetcher({ queryKey: `/api/channels` }),
    {
      enabled: !!userData,
    },
  );
  const [channelCollapse, setChannelCollapse] = useState(false);

  useEffect(() => {
    console.log('ghkdxogus channelData : ', channelData);
  }, [channelData]);

  const toggleChannelCollapse = useCallback(() => {
    setChannelCollapse((prev) => !prev);
  }, []);

  return (
    <>
      <h2>
        <CollapseButton collapse={channelCollapse} onClick={toggleChannelCollapse}>
          <i
            className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline"
            data-qa="channel-section-collapse"
            aria-hidden="true"
          />
        </CollapseButton>
        <span>Channels</span>
      </h2>
      <div>
        {!channelCollapse &&
          channelData?.map((channel) => {
            return (
              <NavLink
                key={channel.channelId}
                className={({ isActive }) => (isActive ? 'selected' : '')}
                to={`/workspace/channel/${channel.channelName}`}
              >
                <span># {channel.channelName}</span>
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default ChannelList;
