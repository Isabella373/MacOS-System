import './index.scss';
import 'dayjs/locale/zh-cn';

import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import Icon from '../../lib/Icon';

dayjs.locale('en');

const Header: React.FC = () => {
    const timeFormat = 'MMM D, YYYY h:mm A';
    const [time, setTime] = useState(dayjs().format(timeFormat));
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('Isabella Han');

    useEffect(() => {
        const updateTime = setInterval(() => {
            const newTime = dayjs().format(timeFormat);
            setTime(newTime);
        }, 60 * 1000);
        return (): void => window.clearInterval(updateTime);
    });
    //side effects, subscription, update, setTimer//clean setInterval when delete the component, perfomance & accumulate of setInterval;

    return (
        <header className="Header">
            <div className="HeaderLeft">
                <div>
                    <Icon type="icon-apple" style={{ fontSize: 16 }} />
                </div>
                <div>
                    {showInput ? (
                        <input
                            autoFocus
                            value={inputValue}
                            onChange={(e): void => setInputValue(e.target.value)}
                            onBlur={(): void => setShowInput(false)}
                        />
                    ) : (
                        <span
                            className="text"
                            onClick={(): void => setShowInput(true)}
                        >
                            {inputValue}
                        </span>
                    )}
                </div>
                <div>File</div>
                <div>Edit</div>
                <div>View</div>
                <div>Go</div>
                <div>Window</div>
                <div>Help</div>
            </div>
            <div className="HeaderRight">
                <a
                    href="https://isabella373.github.io"
                    rel="noopener noreferrer"
                    target="blank"
                ></a>

                <a
                    href="https://github.com/Isabella373"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Icon type="icon-ren" style={{ fontSize: 22 }} />
                </a>
                <div>{time}</div>
            </div>
        </header>
    );
    // scalable scale
};

export default Header;
