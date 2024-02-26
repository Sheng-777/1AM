const SelectBoards = ({step, setStep, handleCheckBoxChange, loading, errorMsg, submitError}: any) => {
    const availableBoard = [
        {id:1, label: "Board 1"},
        {id:2, label: "Board 2"},
        {id:3, label: "Board 3"},
        {id:4, label: "Board 4"},
        {id:5, label: "Board 5"},
        {id:6, label: "Board 6"},
     ]
    
    function handleBack() {
        setStep(step - 1);
    }

    return (
        <div className="w-60">
            <div className="font-bold">
                <h1>Choose Boards</h1>
            </div>
            <hr className="my-4"></hr>
            <div className="rounded-md shadow-sm -space-y-px">
                {availableBoard.map((board: any) => (
                    <div key={board.id} className=''>
                        <label className="">
                            <input
                                id="boards"
                                name="boards"
                                type="checkbox"
                                value={board.label}
                                onChange={handleCheckBoxChange}
                            />
                        {board.label}
                        </label>
                    </div>
                ))}
             </div>
            <div className="mt-4 flex justify-between">
                <button onClick={handleBack} className="text-gray-500 underline">
                    Back
                </button>
                <button type="submit" disabled={loading} className="text-white bg-blue-500 rounded-md px-4 py-1">
                    Create Post
                </button>
                {errorMsg && <div className='pt-2 text-red-700'>{errorMsg}</div>}
                {submitError && <div className='pt-2 text-red-700'> {submitError} </div>}
            </div>
        </div>
    )
}

export default SelectBoards