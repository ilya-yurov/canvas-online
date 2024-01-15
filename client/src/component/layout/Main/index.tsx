import type { FC } from 'react';
import {Wrapper} from "./styles";
import {Global} from "@emotion/react";
import globalCss from "component/layout/common/globalCss";

const Main: FC = () => {
    return (
        <>
            <Global styles={globalCss} />
            <Wrapper>
                Some text
            </Wrapper>
        </>
    )
};

export default Main;
