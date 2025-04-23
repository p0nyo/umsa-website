"use client"

export default function SignIn() {
    const postSignIn = async () => {
        await fetch('/api/post/events', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: 'test',
              date: '01.01.24',
              link: 'test',
              image: 'test',
            }),
        });
    }

    const putSignIn = async () => {
        await fetch('api/put/events',{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 28,
                title: 'PUT Test',
                date: '01.01.24',
                link: 'test',
                image: 'test',
            }),
        });
    }

    const deleteSignIn = async () => {
        await fetch('api/delete/events',{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 28,
            }),
        });
    }



    return(
        <div className="relative flex flex-col min-h-screen justify-center items-center bg-starImg bg-cover">
            <div className="absolute inset-0 opacity-65 bg-blueOverlay"></div>
            <div className="flex-col justify-center items-center z-40 space-y-20">
                <img className="pointer-events-none sm:h-auto transparent-y-gradient" draggable="false" src="/umsa-globe1.svg"/>
                <div className="border-4 border-white bg-white rounded-md flex justify-center items-center scale-hover">
                    <p className="text-umsaBlue text-2xl">sign in with</p>
                    <img src="/Google.svg"></img>
                </div>
                <div onClick={postSignIn} className="border-4 border-white bg-white rounded-md flex justify-center items-center scale-hover">
                    <p className="text-umsaBlue text-2xl">POST</p>
                    <img src="/Google.svg"></img>
                </div>
                <div onClick={putSignIn} className="border-4 border-white bg-white rounded-md flex justify-center items-center scale-hover">
                    <p className="text-umsaBlue text-2xl">PUT</p>
                    <img src="/Google.svg"></img>
                </div>
                <div onClick={deleteSignIn} className="border-4 border-white bg-white rounded-md flex justify-center items-center scale-hover">
                    <p className="text-umsaBlue text-2xl">DELETE</p>
                    <img src="/Google.svg"></img>
                </div>
            </div>
        </div>
    )
}