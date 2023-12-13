/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from "react";

interface OTPDialogProps {
  onClose: () => void;
  onSubmit: (otp: string) => void;
}

const OTPDialog: React.FC<OTPDialogProps> = ({ onClose, onSubmit }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const otpInputs = useRef<Array<HTMLInputElement | null>>([]);
  const correctOTP = "1234";
  const [resendDisabled, setResendDisabled] = useState(false);

  useEffect(() => {
    otpInputs.current[0]?.focus();
    startTimer();
  }, []);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.match(/^\d+$/) && index < 4) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        otpInputs.current[index + 1]?.focus();
      }
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join("");
    if (enteredOTP === correctOTP) {
      console.log("OTP is correct!");
    } else {
      console.log("Incorrect OTP. Please try again.");
    }
    console.log("Entered OTP:", enteredOTP);
    onSubmit(enteredOTP);
    onClose();
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setTimer(60);
    startTimer();
    otpInputs.current[0]?.focus();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
        <p className="text-gray-700 mb-4">Check your email for the OTP</p>
        <div className="flex justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  handleBackspace(index);
                }
              }}
              maxLength={1}
              className="w-10 h-10 mx-2 border text-center rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ref={(ref) => (otpInputs.current[index] = ref)}
            />
          ))}
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className="mb-2 space-x-20">
            <button
              className="text-purple-500 hover:underline cursor-pointer"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div>
            <button
              className={`text-purple-500 hover:underline cursor-pointer ${
                timer > 0 ? "text-gray-400 cursor-not-allowed" : ""
              }`}
              onClick={handleResend}
              disabled={timer > 0}
            >
              Resend {timer > 0 && `(${timer}s)`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPDialog;
