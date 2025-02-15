import * as React from "react";
import { View } from "react-native";
import Button from "../components/Button"; // Fixed import casing
import { myColors } from "../components/styles/colors"; // Fixed import casing
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "./styles/GlobalStyles";
import { Text } from "react-native";




export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState(null);
  
    const handleNumberPress = (buttonValue) => {
      if (firstNumber.length < 10) {
        setFirstNumber(firstNumber + buttonValue);
      }
    };
  
    const handleOperationPress = (buttonValue) => {
      // If a result exists, use it as the starting point for the next calculation
      if (result !== null) {
        setSecondNumber(result.toString());
        setFirstNumber("");
        setResult(null); // Reset result as we're starting a new calculation
      } else {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      }
      setOperation(buttonValue);
    };
  
    const clear = () => {
      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
      setResult(null);
    };
  
    const getResult = () => {
      const num1 = parseFloat(secondNumber);
      const num2 = parseFloat(firstNumber);
  
      if (isNaN(num1) || isNaN(num2)) {
        setResult(0); // Handle invalid input
        return;
      }
  
      let calculation = 0;
      switch (operation) {
        case "+":
          calculation = num1 + num2;
          break;
        case "-":
          calculation = num1 - num2;
          break;
        case "*":
          calculation = num1 * num2;
          break;
        case "/":
          calculation = num1 / num2;
          break;
        default:
          calculation = 0;
          break;
      }
      setResult(calculation);
      setFirstNumber(calculation.toString()); // Use the result as the first number for the next operation
      setSecondNumber("");
      setOperation("");
    };
  
    const firstNumberDisplay = () => {
      if (result !== null) {
        return (
          <Text
            style={
              result < 99999
                ? [Styles.screenFirstNumber, { color: myColors.result }]
                : [Styles.screenFirstNumber, { fontSize: 50, color: myColors.result }]
            }
          >
            {result}
          </Text>
        );
      }
  
      if (firstNumber && firstNumber.length <= 6) {
        return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
      }
  
      if (firstNumber === "") {
        return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
      }
  
      if (firstNumber.length > 5 && firstNumber.length < 8) {
        return (
          <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
            {firstNumber}
          </Text>
        );
      }
  
      if (firstNumber.length > 7) {
        return (
          <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
            {firstNumber}
          </Text>
        );
      }
    };
  
    return (
      <View style={Styles.viewBottom}>
        <View
          style={{
            height: 120,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <Text style={Styles.screenSecondNumber}>{secondNumber}</Text>
          <Text
            style={{
              color: "purple",
              fontSize: 50,
              fontWeight: "500",
            }}
          >
            {operation}
          </Text>
          {firstNumberDisplay()}
        </View>
  
        <View style={Styles.row}>
          <Button title="C" isGray onPress={clear} />
          <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
          <Button title="%" isGray onPress={() => handleOperationPress("%")} />
          <Button title="/" isBlue onPress={() => handleOperationPress("/")} />
        </View>
  
        <View style={Styles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button title="*" isBlue onPress={() => handleOperationPress("*")} />
        </View>
  
        <View style={Styles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
        </View>
  
        <View style={Styles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
          <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
        </View>
  
        <View style={Styles.row}>
          <Button title="." onPress={() => handleNumberPress(".")} />
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button title="<" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
          <Button title="=" isBlue onPress={getResult} />
        </View>
      </View>
    );
  }