package tech.toadx.frogbookapi.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.toadx.frogbookapi.Entity.Status;
import tech.toadx.frogbookapi.Repository.StatusRepository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

@Service
public class StatusService {

    @Autowired
    StatusRepository statusRepository;

    public Status saveStatus(Status status){

        Date date=new Date();
        long time=date.getTime();
        Timestamp dateTime=new Timestamp(time);

        status.setStatusID(UUID.randomUUID());
        status.setUploadTime(dateTime);
        return statusRepository.save(status);
    }

    public ArrayList<Status> getAllStatus() {
        return new ArrayList<Status>();
    }
}