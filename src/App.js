import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(6);

  const [isActive, setActive] = useState(true);

  const handleState = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  const price = 10 * value;

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const simulateRequest = (value) => {
    const requestElement = document.getElementById("request-result");
    if (requestElement) {
      requestElement.innerHTML = `Simulated request with quantity: ${value}`;
    }
  };

  const debouncedSimulateRequest = debounce(simulateRequest, 500);

  const plusValue = () => {
    if (value < 13) {
      setValue(value + 1);
    }
  };
  const minusValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  useEffect(() => {
    debouncedSimulateRequest(value);
  }, [value]);

  return (
    <div className="App">
      <li className="flex py-6 justify-evenly">
        <div className={isActive ? "container-active" : "container-null"}>
          <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl ">
            <img
              className="object-cover rounded-lg h-36 w-24 md:h-auto md:w-48"
              src={require("./test.jpg")}
            />
            <div className="ml-4 mr-4 flex flex-1 flex-col min-w-[200px]">
              <div>
                <div className="mb-2 md:mb-4 flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href="#">Lorem Ipsum Lorem Ipsum Lorem Ipsum</a>
                  </h3>
                  <p className="ml-4">${price}.00</p>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <div className="flex">
                  <button
                    className="control-btn h-8 w-8 md:h-12 md:w-12 border-2 border-solid border-black flex items-center justify-center hover:bg-[#1A1A1A] active:bg-[#1A1A1A]"
                    onClick={minusValue}
                    disabled={value === 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#3B3B3B"
                    >
                      <path d="M200-440v-80h560v80H200Z" />
                    </svg>
                  </button>

                  <button
                    disabled
                    className="h-8 w-8 md:h-12 md:w-12 border-y-2 border-solid border-black text-wrap text-center "
                  >
                    {value}
                  </button>
                  <button
                    className="control-btn h-8 w-8 md:h-12 md:w-12 border-2 border-solid border-black  flex items-center justify-center hover:bg-[#1A1A1A] active:bg-[#1A1A1A]"
                    onClick={plusValue}
                    disabled={value === 13}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#3B3B3B"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                  </button>
                </div>

                <button
                  type="button"
                  className="h-8 w-8 md:h-12 md:w-12 md:font-medium flex items-center justify-center"
                  onClick={handleState}
                >
                  <svg
                    className="delete"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#3B3B3B"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <div id="request-result" style={{ marginTop: "20px" }}>
        Simulated request with quantity: {value}
      </div>

      {/* <li className="flex py-6 justify-between">
        <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={require("./test.jpg")}
          />

          <div className="ml-4 mr-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <a href="#">Cry For You Dress Baby Black Size S</a>
                </h3>
                <p className="ml-4">$90.00</p>
              </div>
            </div>
            <div className="flex flex-1 justify-between text-sm">
              <div className="flex">
                <div className="h-100 w-100 border-2 border-solid">
                  <div className="flex">
                    <button
                      className="h-8 w-8 border-2 border-solid"
                      onClick={plusValue}
                      disabled={value === 13}
                    >
                      +
                    </button>
                    <button
                      disabled
                      className="h-8 w-8 border-y-2 border-solid text-wrap text-center "
                    >
                      {value}
                    </button>
                    <button
                      className="h-8 w-8 border-2 border-solid"
                      onClick={minusValue}
                      disabled={value === 1}
                    >
                      -
                    </button>
                  </div>
                </div>
                <button type="button" className="font-medium hover:svg-">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="black"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li> */}
    </div>
  );
}

export default App;
