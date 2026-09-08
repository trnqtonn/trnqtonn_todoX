import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Lien ket CSDL thanh cong");
  } catch (error) {
    console.error("Loi ket noi CSDL:", error);
    process.exit(1); // Thoat chuong trinh khi ket noi CSDL that bai
  }
};
