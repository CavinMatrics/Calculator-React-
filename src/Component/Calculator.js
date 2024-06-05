import {useState} from "react";
import CustomButton from "./CustomButton";


export default function Calculator(props) {

    let tmp = 0;

    const [rlt, setRlt] = useState('0');
    const [firstVal, setFirstVal] = useState('');
    const [oper, setOper] = useState('');
    const [equ, setEqu] = useState('');
    const [checkDot, setCheckDot] = useState(false);
    const [lastVal, setLastVal] = useState(0);

    const handleClickNum = val => {

        if (equ.slice(-1) === '=') {
            // handleReset();
            setRlt(val.toString());
            return ;
        }
        if (rlt === '0') setRlt(val.toString());
        else setRlt(rlt => rlt + val);
    }
    const handleClickOpera = (val) => {

        let tempOpera = '';
        switch (val) {
            case 10:
                tempOpera = '%'
                break;
            case 11:
                tempOpera = '/';
                break;
            case 12:
                tempOpera = '*';
                break;
            case 13:
                tempOpera = '-';
                break;
            case 14:
                tempOpera = '+';
        }
        setOper(tempOpera);

        if ((!firstVal.length && lastVal === 0 ) || equ.slice(-1) === '=' ) {
            setFirstVal(rlt);
            setRlt('0');
            setEqu(rlt + tempOpera);
            // setRlt('0');
        }
        else {
            handleCalc();
            setFirstVal(tmp);
            setEqu(tmp.toString() + tempOpera);
            setRlt('0');
        }

    }
    const handleBack = () => {
        if (rlt.length === 1 || equ.slice(-1) === '=') setRlt('0');
        else {
            let tmpStr = rlt.slice(-1);
            if (tmpStr === '.') setCheckDot(false);
            setRlt(rlt => rlt.slice(0, -1));
        }

    }
    const handleDot = () => {
        if (!checkDot) {
            setCheckDot(true);
            setRlt(rlt => rlt + '.')
        }
    }
    const handleSign = () => {
        let sign = rlt[0];
        if (sign !== '-') setRlt(rlt => "-" + rlt);
        else setRlt(rlt => rlt.slice(1));
    }
    const handleReset = () => {
        setEqu('');
        setFirstVal('');
        setOper('');
        setCheckDot(false);
        setRlt('0');
        tmp = 0;
    }
    const handleCalc = () => {
        switch (oper) {
            case '%':
                setEqu(equ => equ + rlt + '=');
                tmp = Number(firstVal) % Number(rlt);
                setRlt(rlt => tmp.toString());
                break;
            case '/':
                setEqu(equ => equ + rlt + '=');
                tmp = Number(firstVal) / Number(rlt);
                setRlt(rlt => tmp.toString());
                break;
            case '*':
                setEqu(equ => equ + rlt + '=');
                tmp = Number(firstVal) * Number(rlt);
                setRlt(rlt => tmp.toString());
                break;
            case '-':
                setEqu(equ => equ + rlt + '=');
                tmp = Number(firstVal) - Number(rlt);
                setRlt(rlt => tmp.toString());
                break;
            case '+':
                setEqu(equ => equ + rlt + '=');
                tmp = Number(firstVal) + Number(rlt);
                setRlt(rlt => tmp.toString());
        }
        setLastVal(tmp);
    }

    return (
        <div className={"border-[1px] border-gray-200 shadow-md bg-gray-100 " + props.parentClass}>
            <div className="h-[30%] w-[100%]">
                <p className="text-[20px] h-[20%] flex items-center justify-end">
                    {equ}
                </p>
                <p className=" text-[45px] h-[80%] flex items-center justify-end">
                    {rlt}
                </p>
            </div>
            <div className="h-[70%] w-[100%] grid grid-cols-4 justify-around">
                <CustomButton val={10} handleClick={handleClickOpera}>%</CustomButton>
                <CustomButton val={11} handleClick={handleClickOpera}>/</CustomButton>
                <CustomButton handleClick={handleReset}>C</CustomButton>
                <CustomButton handleClick={handleBack}>⌫</CustomButton>

                <CustomButton val={7} handleClick={handleClickNum}>7</CustomButton>
                <CustomButton val={8} handleClick={handleClickNum}>8</CustomButton>
                <CustomButton val={9} handleClick={handleClickNum}>9</CustomButton>
                <CustomButton val={12} handleClick={handleClickOpera}>*</CustomButton>

                <CustomButton val={4} handleClick={handleClickNum}>4</CustomButton>
                <CustomButton val={5} handleClick={handleClickNum}>5</CustomButton>
                <CustomButton val={6} handleClick={handleClickNum}>6</CustomButton>
                <CustomButton val={13} handleClick={handleClickOpera}>-</CustomButton>

                <CustomButton val={1} handleClick={handleClickNum}>1</CustomButton>
                <CustomButton val={2} handleClick={handleClickNum}>2</CustomButton>
                <CustomButton val={3} handleClick={handleClickNum}>3</CustomButton>
                <CustomButton val={14} handleClick={handleClickOpera}>+</CustomButton>

                <CustomButton handleClick={handleSign}>+/-</CustomButton>
                <CustomButton val={0} handleClick={handleClickNum}>0</CustomButton>
                <CustomButton handleClick={handleDot}>.</CustomButton>
                <CustomButton handleClick={handleCalc}>=</CustomButton>
            </div>
        </div>
    )
}