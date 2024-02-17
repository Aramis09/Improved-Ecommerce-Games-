import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useMemo, useState } from "react";
import { GameDetail } from "../../interfaces/interfaces";
import { MercadoPagoCreatedPreference } from "../../interfaces/interfacesMercadoPago";
import s from "./s.module.scss";

export interface ItemMeli {
  title: string;
  unit_price: number;
  quantity: number;
}

interface Props {
  gamesToPay?: GameDetail[];
}
export default function ButtonMeli({ gamesToPay }: Props) {
  //!ocultar estas credenciales
  initMercadoPago("TEST-39961ba6-f6f6-46cf-a2da-4eeaf40d030d");
  const [preferenceId, setPreferenceId] = useState<string>();

  const itemsPreferenceMercadoPago = useMemo(() => {
    const formatedArray = gamesToPay?.map((game) => {
      return {
        title: game.name,
        unit_price: Number(game.price),
        quantity: 1,
      } as ItemMeli;
    });
    return formatedArray;
  }, [gamesToPay]);

  console.log(itemsPreferenceMercadoPago);

  const hanlderCreatePayment = async () => {
    const preferenceCreated: MercadoPagoCreatedPreference = await (
      await fetch("http://localhost:3001/mercadoPago/createPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: itemsPreferenceMercadoPago }),
      })
    ).json();

    setPreferenceId(preferenceCreated.id);
  };

  return preferenceId ? (
    <Wallet
      initialization={{ preferenceId: preferenceId }}
      customization={{ texts: { valueProp: "smart_option" } }}
    />
  ) : (
    <button className={s.buttonCreatePayment} onClick={hanlderCreatePayment}>
      Create Payment
    </button>
  );
}
