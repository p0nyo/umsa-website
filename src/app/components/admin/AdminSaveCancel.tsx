type AdminSaveCancelProp = {
    onClickSave: () => void;
    onClickAdd: () => void;
}

export default function AdminSaveCancel({ onClickSave, onClickAdd }: AdminSaveCancelProp) {
    return (
        <div className="sticky bottom-0 flex flex-row justify-center bg-white border-t-2 border-umsaBlue">
            <div onClick={onClickAdd} className="m-2 py-2 px-4 border-umsaBlue border-2 rounded-md text-md scale-hover cursor-pointer">add</div>
            <div onClick={() => window.location.reload()} className="m-2 py-2 px-4 border-umsaBlue border-2 rounded-md text-md scale-hover cursor-pointer">cancel</div>
            <div onClick={onClickSave} className="m-2 py-2 px-4 border-umsaBlue border-2 rounded-md text-md font-semibold scale-hover cursor-pointer">save</div>
        </div>
    )
}