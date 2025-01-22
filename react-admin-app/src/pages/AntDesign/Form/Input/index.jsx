import {
    CaretDownFilled,
    DoubleRightOutlined,
    GithubFilled,
    InfoCircleFilled,
    LogoutOutlined,
    PlusCircleFilled,
    QuestionCircleFilled,
    SearchOutlined,
} from '@ant-design/icons';

import {
    Button,
    ConfigProvider,
    Divider,
    Dropdown,
    Input,
    Popover,
    theme,
} from 'antd';

export default () => {
    const {token} = theme.useToken();

    return (
        <div style={{width: '200px'}}>
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: token.colorBgTextHover,
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            color: token.colorTextLightSolid,
                        }}
                    />
                }
                placeholder="搜索方案"
                variant="borderless"
            />
        </div>
    )
}