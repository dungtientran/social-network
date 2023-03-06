import { axiosConfig, serverUrl } from '@/lib/axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { io } from 'socket.io-client';

const MessengerAll = ({ user, messengerchatall }) => {

    const [messenger, setMessenger] = useState([]);
    const [text, setText] = useState();
    const [socket, setSocket] = useState(null)
    const scrollRef = useRef();

    useEffect(() => {
        setMessenger(messengerchatall);
    }, [messengerchatall]);


    useEffect(() => {
        const newSocket = io(serverUrl);
        setSocket(newSocket);
        return () => newSocket.disconnect()
    }, [user]);

    useEffect(() => {
        if (socket === null) return;
        socket.emit('addUser', user?.id);
        socket.on('getOnlineUser', onlineUsers => {})
        return () => {
            socket.off('getOnlineUser');
        }
    }, [socket]);

    const messengerSend = {
        text: text,
        user: {
            id: user?.id,
            avatar: user?.avatar,
            name: user?.name
        }
    };

     const handleSendMessernger = async (e) => {
        e.preventDefault();
        await axiosConfig.post('/api/messengerall/create', messengerSend);
        const msg = [...messenger];
        msg.push({ fromSelf: true, messenger: text, user: messengerSend.user })
        setMessenger(msg)
        socket.emit('sendMessenger', { fromSelf: false, messenger: text, user: messengerSend.user })
        setText('')

    }

   useEffect(() => {
    if (socket === null) return;
    socket.on('msg-recieve', msg => {
        setMessenger((prev => [...prev, msg]))
    })
   }, [socket]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messenger]);

    return (
        <div className='rounded-[5%] bg-[#282828] md:h-[400px] lg:h-[450px] mt-4 p-3 relative'>
            <div className='py-2'>
                <p>Chat tổng</p>
            </div>
            <div className='h-[80%] p-3 bg-[#1f1f1f] flex flex-col gap-2 rounded-lg overflow-y-auto scrollChatAll'>
                {messenger?.map((item, index) => (
                    <div ref={scrollRef} key={index}>
                        <div className={`flex items-center w-full ${item?.fromSelf ? 'justify-end text-red-500' : 'justify-start'}`}>
                            <div className='p-2 bg-black rounded-lg max-w-[70%]'>
                                <div className='flex items-center'>
                                    <div className='w-6 h-6 rounded-full'>
                                        <img src={item?.user?.avatar} alt="" className='image-circle' />
                                    </div>
                                    <p className='text-blue-600 ml-2 text-sm'>{item?.user?.name}</p>
                                </div>
                                <p className='break-words'>{item?.messenger}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessernger} className='absolute bottom-0 left-0 w-full flex gap-1 items-center justify-between px-3 mb-4'>
                <div className='w-8 h-8 rounded-full'>
                    <img src={user?.avatar} alt="" className='image-circle' />
                </div>
                <input type="text"
                    className='bg-[#1F1F1F] w-[80%] outline-none p-1 rounded-lg'
                    placeholder='Nói gì đê'
                    onChange={(e) => setText(e.target.value)}
                />
                <button>
                    <AiOutlineSend size={25} />
                </button>
            </form>
        </div>
    )
}


export default MessengerAll
