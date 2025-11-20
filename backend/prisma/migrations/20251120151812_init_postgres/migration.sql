-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "ticket_number" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "escalated_at" TIMESTAMP(3),
    "acknowledged_at" TIMESTAMP(3),
    "closed_at" TIMESTAMP(3),
    "rule_name" TEXT,
    "close_code" TEXT,
    "assignee_name" TEXT,
    "raw_data" JSONB NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncidentActivity" (
    "id" SERIAL NOT NULL,
    "incident_id" TEXT NOT NULL,
    "activity_type" TEXT NOT NULL,
    "old_value" TEXT,
    "new_value" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IncidentActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IncidentActivity" ADD CONSTRAINT "IncidentActivity_incident_id_fkey" FOREIGN KEY ("incident_id") REFERENCES "Incident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
