import React,{useEffect,useMemo,useState}from 'react';
import { View } from 'react-native';

import StatusIndicator from './StatusBoxComponents/StatusIndicator';
import NetworkStatus from './StatusBoxComponents/NetworkStatus';
import BatteryStatus from './StatusBoxComponents/BatteryStatus';
import BatteryAlert from './StatusBoxComponents/BatteryAlert';
import { AlertStatus ,ALERT_ICONS,AlertMesssage} from '@_types/statusBox';
import { StatusType } from '@_types/homeScreen';
import { IconName } from '@_types/icon';
function StatusBox({ code, batteryLevel, networkConnected,userState }: { 
  code: string | null; 
  batteryLevel: number; 
  networkConnected: boolean; 
  userState:string;
}): React.JSX.Element {

  const [status, setStatus] = useState<AlertStatus>(
    userState === "위험" ? "danger" : userState === "경고" ? "warning" : "default"
  );
  useEffect(() => {
    const newStatus = userState === "위험" ? "danger" : userState === "경고" ? "warning" : "default";

    if (newStatus !== status) {
      console.log("상태 변경 감지:", status, "->", newStatus);
      setStatus(newStatus);
    }
  }, [userState,networkConnected,batteryLevel]); // `batteryLevel` 제거 -> 무한 루프 방지

  // 배터리 아이콘 결정
  // 배터리 아이콘 결정
const getBatteryIcon = (batteryLevel: number, networkConnected: boolean): IconName => {
  const batteryLevels: { max: number; connected: IconName; disconnected: IconName }[] = [
    { max: 10, connected: "Battery0Red", disconnected: "Battery0Off" },
    { max: 20, connected: "Battery15Yellow", disconnected: "Battery15Off" },
    { max: 45, connected: "Battery35Black", disconnected: "Battery35Off" },
    { max: 65, connected: "Battery65Black", disconnected: "Battery65Off" },
    { max: 85, connected: "Battery85Black", disconnected: "Battery85Off" },
    { max: 100, connected: "Battery100Black", disconnected: "Battery100Off" },
  ];

  const battery = batteryLevels.find(({ max }) => batteryLevel <= max) || batteryLevels[batteryLevels.length - 1];

  return networkConnected ? battery.connected : battery.disconnected;
};


  // 네트워크 아이콘 결정
  const getNetworkIcon = (networkConnected: boolean): IconName => {
    return networkConnected ? "GlobeOn" : "GlobeOff";
  };
  //alert 아이콘
  const getAlertIcon = (status: AlertStatus, networkConnected: boolean): IconName => {
    return networkConnected ? ALERT_ICONS[status] : "Wifi";
  };

  //Alert 메시지 설정
  const getAlertMessage = (code: string | null):AlertMesssage => {
    switch (code) {
      case "NET-04":
      case "NET-02":
        return { title: "와이파이 또는 모바일 데이터에 연결해 주세요!", description: "현재 인터넷에 접속되어 있지 않습니다." };
      case "BAT-02":
        return { title: "휴대폰을 충전해 주세요!", description: "현재 배터리 잔량이 10% 미만입니다." };
      case "BAT-01":
        return { title: "휴대폰을 충전해 주세요!", description: "현재 배터리 잔량이 20% 미만입니다." };
    
      default:
        return { title: "", description: "" };
    }
  };
  //SCR은 사용자가 보지 못하니 추가X
  // 상태 설정
  const statusConfig = {
    danger: {
      message: networkConnected ? "위험 상태입니다!" : "오프라인 상태입니다!",
      bgColor: networkConnected ? "bg-red50" : "bg-gray5",
      textColor: networkConnected ? "text-red900" : "text-gray90",
      network: { message: networkConnected ? "연결중" : "연결안됨", textColor: "text-gray70" },
      battery: { percentage: `${batteryLevel}%`, textColor: "text-red800" },
      alert: getAlertMessage(code),
    },
    warning: {
      message: networkConnected ? "경고 상태입니다!" : "오프라인 상태입니다.",
      bgColor: networkConnected ? "bg-yellow50" : "bg-gray5",
      textColor: networkConnected ? "text-yellow900" : "text-gray90",
      network: { message: networkConnected ? "연결중" : "연결 없음", textColor: "text-gray70" },
      battery: { percentage: `${batteryLevel}%`, textColor: "text-yellow800" },
      alert: getAlertMessage(code),
    },
    default: {
      message: "안전한 상태입니다!",
      bgColor: "bg-green50",
      textColor: "text-green900",
      network: { message: "연결중", textColor: "text-gray70" },
      battery: { percentage: `${batteryLevel}%`, textColor: "text-gray70" },
      alert: { title: "", description: "" },
    },
  };
  //alert 메세지와 함께 나타나는 아이콘 
  const getAlertBoxIcon = (code: string | null): IconName => {
    if (code?.startsWith("BAT")) return "BatteryAlert"; 
    if (code?.startsWith("NET")) return "WifiOffAlert";
    return "AlertTriangle"; 
  };


  //아이콘 설정
  const iconConfig: IconName[] = [
    getAlertIcon(status as AlertStatus,networkConnected), // Alert 아이콘
    getNetworkIcon(networkConnected), // 네트워크 아이콘
    getBatteryIcon(batteryLevel, networkConnected), // 배터리 아이콘
    getAlertBoxIcon(code),
  ];

  //상태 설정 (안전하면 렌더링 X)
  const config = statusConfig[status as keyof typeof statusConfig] || null;
  if (!config) return <></>;


  return (
    <>
      <StatusIndicator
        icon={iconConfig[0]}
        message={config.message}
        bgColor={config.bgColor}
        textColor={config.textColor}
      />
      <View className="flex-1 flex-row items-center justify-center w-3/4 mx-auto mb-8">
        <NetworkStatus
          icon={iconConfig[1]}
          message={config.network.message}
          textColor={config.network.textColor}
        />
        <BatteryStatus
          icon={iconConfig[2]}
          message={`${batteryLevel}%`}
          textColor={config.battery.textColor}
        />
      </View>
      {status === 'default' ? (
        <></>
      ) : (
        <BatteryAlert
          icon={iconConfig[3]}
          title={config.alert.title}
          description={config.alert.description}
        />
      )}
    </>
  );
}

export default StatusBox;
