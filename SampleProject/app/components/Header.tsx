import React, { FC } from "react";
import { SafeAreaView, Text } from "react-native";

import styles from "../styles/components/Header";

interface HeaderProps {
    title: string
}
// Header의 type은 FC(Function Component)이며,
// props의 type(HeaderProps)을 넘긴다
const Header: FC<HeaderProps> = props => {
    return (
        <Text style={styles.title}>{props.title}</Text>
    );
}

export default Header;