export const approveChangeDateAppointment = async ({
  appointmentId,
  userId,
}: {
  appointmentId: string;
  userId: string;
}): Promise<any> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_MAIN}approveChangeDateAppointment`, {
    method: "PUT",
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      appointmentId,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  });
};
