import { useEffect, useState } from "react";

import { Card } from "../../components/card";
import { getCurrentTime } from "../../functions/get-current-time";

import { Container } from "./styles";

export function Home() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const currentTime = getCurrentTime();
      setTime(currentTime);
    }, 1000);
  }, []);

  return (
    <Container>
      <Card number={time?.hours} />
      <Card number={time?.minutes} />
      <Card number={time?.seconds} />
    </Container>
  );
}
