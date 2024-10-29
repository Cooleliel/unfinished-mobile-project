import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseStyles } from "../../styles/baseStyles";
import { CustomHeader } from "../../components/customHeader";
import { COLORS } from "../../constants/themes";
import { tontinePageStyles } from "./styles";
import TontineTopTab from "../../components/tontinetoptab";

function TontinePage() {
    return(
        <SafeAreaView 
            style={[baseStyles.container, tontinePageStyles.container]}>
            <CustomHeader
                icon="arrow-left"
                iconColor={COLORS.text}
                title="Tontine"
            />
            <TontineTopTab/>
        </SafeAreaView>
    );
}

export default TontinePage;