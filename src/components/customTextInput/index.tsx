import React from "react";
import { TextStyle, ViewStyle, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../../constants/themes";
import { customTextInputStyles } from "./styles";

type KeyboardType = "default" | "email-address" | "numeric" | "phone-pad";
interface CustomTextInputProps {
    // Props de base
    icon: string;
    placeholder: string;
    value?: string;
    
    // Callbacks
    onChangeText?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onEndEditing?: () => void;
    
    // Configuration du clavier
    keyboard?: KeyboardType
    secureTextEntry?: boolean;
    maxLength?: number;
    editable?: boolean;
    
    // Validation et erreurs
    error?: boolean;
    errorText?: string;
    required?: boolean;
    
    // Style et apparence
    iconColor?: string;
    iconSize?: number;
    containerStyle?: ViewStyle;
    contentStyle?: TextStyle;
    placeholderColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    
    // Configuration avancée
    rightIcon?: string;
    onRightIconPress?: () => void;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    testID?: string;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
    // Props de base
    icon,
    placeholder,
    value,
    
    // Callbacks
    onChangeText,
    onFocus,
    onBlur,
    onEndEditing,
    
    // Configuration du clavier
    keyboard = "default",
    secureTextEntry = false,
    maxLength,
    editable = true,
    
    // Validation et erreurs
    error = false,
    errorText,
    required = false,
    
    // Style et apparence
    iconColor = COLORS.primary,
    iconSize,
    containerStyle,
    contentStyle,
    placeholderColor = COLORS.placeholder,
    borderColor = COLORS.primary,
    backgroundColor = COLORS.background,
    
    // Configuration avancée
    rightIcon,
    onRightIconPress,
    autoCapitalize = "none",
    testID
}) => (
    <>
        <TextInput 
            style={[
                customTextInputStyles.customTextInputContainer,
                { borderColor, backgroundColor },
                error && customTextInputStyles.errorInput,
                containerStyle
            ]}
            value={value}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            autoCapitalize={autoCapitalize}
            autoComplete="off" 
            autoCorrect={false} 
            keyboardType={keyboard}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            editable={editable}
            testID={testID}
            left={
                <TextInput.Icon 
                    icon={icon} 
                    color={iconColor}
                    size={iconSize}
                />
            }
            right={rightIcon && (
                <TextInput.Icon 
                    icon={rightIcon}
                    color={iconColor}
                    onPress={onRightIconPress}
                />
            )}
            contentStyle={[customTextInputStyles.customTextInputContent, contentStyle]}
            mode="flat" 
            placeholder={placeholder + (required ? ' *' : '')}
            placeholderTextColor={placeholderColor}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            onEndEditing={onEndEditing}
            error={error}
        />
        {error && errorText && (
            <Text style={customTextInputStyles.errorText}>{errorText}</Text>
        )}
    </>
);

