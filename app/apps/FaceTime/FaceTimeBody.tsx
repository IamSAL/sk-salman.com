import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useAppContext } from 'app/components/app-window/appContext';

interface SidebarProps {
    state: FaceTimeState;
    onTake: () => void;
    onSave: () => void;
    onSelect: (src: string) => void;
}

interface SidebarItemProps {
    date: string;
    active: boolean;
}

interface FaceTimeState {
    canSave: boolean;
    curImage: string | null;
}

const SidebarItem = ({ date, active }: SidebarItemProps) => {
    const [hover, setHover] = useState(false);
    const deleteImage = (image: any) => {
        // Implement your deleteImage logic here
    };

    return (
        <div
            className={`hstack h-16 px-2.5 rounded-md space-x-2 ${active && 'bg-[#508041]'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="h-11 w-11 rounded-full bg-zinc-600 flex-center">
                <span className="i-ph:link-bold text-2xl text-white/80" />
            </div>

            <div className="text-left">
                <div className="font-medium leading-4 text-white sm">
                    FaceTime Link
                </div>
                <div className="hstack space-x-1 text-white/60">
                    <span className="i-ion:videocam" />
                    <span>FaceTime · {format(Number(date), 'hh:mm:ss')}</span>
                </div>
            </div>

            <span

                className={`text-lg text-white/60 hover:white ${!hover && 'transparent'} i-maki:cross absolute right-2.5 duration-150`}
                onClick={(e) => {
                    e.stopPropagation();
                    deleteImage(date);
                }}
            />
        </div>
    );
};

const Sidebar = ({ state, onTake, onSave, onSelect }: SidebarProps) => {
    const images = [];

    return (
        <div className=" h-full  flex flex-col bg-zinc-900/40 backdrop-blur-xl">
            <div className="p-5 space-y-2.5 text-sm">
                <button
                    className="flex-center space-x-1 w-full py-1 text-white bg-green-700 rounded-md"
                    onClick={onTake}
                >
                    <span className="i-ion:ios-videocam text-base" />
                    <span>{state.curImage ? 'Retake' : 'Take a Picture'}</span>
                </button>
                <button
                    className={`flex-center space-x-1 w-full py-1 text-white rounded-md bg-stone-500 ${!state.canSave && 'opacity-60 cursor-not-allowed'
                        }`}
                    disabled={!state.canSave}
                    onClick={onSave}
                >
                    <span
                        className={`${state.canSave ? 'i-mdi:content-save' : 'i-mdi:content-save-off'} text-base`}
                    />
                    <span>Save Picture</span>
                </button>
            </div>

            <div className="text-xs flex-1 overflow-y-auto p-t-5 p-b-2.5 p-x-2.5">
                <div className="px-2.5 text-white/60 mb-2">Recent</div>
                {/* {Object.keys(images)
          .reverse()
          .map((date) => (
            <button
              className="relative w-full"
              key={date}
              onClick={() => onSelect(images[date])}
            >
              <SidebarItem date={date} active={state.curImage === images[date]} />
            </button>
          ))} */}
            </div>
        </div>
    );
};

const FaceTimeBody = () => {
    const webcamRef = useRef<Webcam>(null);
    const addImage = (image: any) => {
        // Implement your addImage logic here
    };
    const { setAppBarElement, app } = useAppContext()
    const [state, setState] = useState<FaceTimeState>({
        canSave: false,
        curImage: null,
    });
    useEffect(() => {

        setAppBarElement(<></>)
        return () => {

        }
    }, [])


    return (
        <div className="relative h-full">
            <div className="md:absolute z-20 w-[30%] h-full">
                <Sidebar
                    state={state}
                    onTake={() => {
                        if (!state.curImage) {
                            const src = webcamRef.current?.getScreenshot() || '';
                            setState({ curImage: src, canSave: true });
                        } else setState({ curImage: null, canSave: false });
                    }}
                    onSave={() => {
                        addImage(state.curImage!);
                        setState({ curImage: null, canSave: false });
                    }}
                    onSelect={(src) => {
                        setState({ curImage: src, canSave: false });
                    }}
                />
            </div>

            <div className="h-full bg-zinc-800 w-full md:absolute top-0 left-0">
                {!state.curImage ? (
                    <Webcam
                        className="h-full w-full"
                        mirrored={true}
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{
                            facingMode: 'user',
                            // aspectRatio: app?.config.initWindowWidth / app?.config.initWindowHeight,
                            width: app?.config.initWindowWidth,
                            height: app?.config.initWindowHeight
                        }}
                    />
                ) : (
                    state.curImage && <img className="h-full w-full" src={state.curImage} alt="your-image" />
                )}
            </div>
        </div>
    );
};

export default FaceTimeBody;
