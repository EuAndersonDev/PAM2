import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    backgroundColor: "#ff416c",
    width: "100%",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  balanceCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    position: "relative",
  },
  balanceTitle: {
    fontSize: 14,
    color: "#777",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  settingsIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 80,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 12,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 30,
  },
  income: {
    alignItems: "center",
  },
  expenses: {
    alignItems: "center",
  
  },
  summaryTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  summaryAmount: {
    fontSize: 22,
    fontWeight: "bold",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 50,
    marginBottom: 5,
  },
  description: {
    textAlign: "center",
    color: "gray",
    fontSize: 12,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
