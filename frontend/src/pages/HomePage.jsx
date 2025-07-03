import React from 'react'
import { useChatStore } from '../store/usechatStore'
import NoChatSelected from '../components/NoChatSelected';
import SideBar from '../components/SideBar';
import ChatContainer from '../components/ChatContainer';


const HomePage = () => {
  const {selectedUser} = useChatStore();
  return (
    <div className='flex items-center justify-center pt-20 px-4'>
      <div className='bg-gray-700 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]'>
        <div className='flex h-full rounded-lg overflow-hidden'>
          <SideBar/>
          {!selectedUser ? <NoChatSelected/> : <ChatContainer/>}
        </div>
      </div>
    </div>
  )
}

export default HomePage
