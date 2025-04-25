type AdminSaveCancelProp = {
    onClick: () => void;
}

export default function AdminSaveCancel({ onClick }: AdminSaveCancelProp) {
    return (
        <div className="sticky bottom-0 flex flex-row justify-end bg-white border-t-2 border-umsaBlue">
            <div onClick={() => window.location.reload()} className="m-2 py-2 px-4 border-umsaBlue border-2 rounded-md text-md scale-hover cursor-pointer">cancel</div>
            <div onClick={onClick} className="m-2 py-2 px-4 border-umsaBlue border-2 rounded-md text-md font-semibold scale-hover cursor-pointer">save</div>
        </div>
    )
}