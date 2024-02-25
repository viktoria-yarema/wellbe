interface CustomTimestamp extends FirebaseFirestore.Timestamp {
  _seconds: number;
  _nanoseconds: number;
}
