import { View, Text, Image } from "react-native"
import { EthPrice } from "./SubInfo"
import { COLORS, SIZES, FONTS } from "../constants"

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />

      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed bt {bid.name}
        </Text>

        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          Bid placed bt {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid
