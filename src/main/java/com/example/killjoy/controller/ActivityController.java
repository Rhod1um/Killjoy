package com.example.killjoy.controller;

import com.example.killjoy.model.Activity;
import com.example.killjoy.repository.ActivityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class ActivityController {

    @Autowired
    ActivityRepo activityRepo;

    @GetMapping("/activities")
    public List<Activity> getActivities(){
        return activityRepo.findAll();
    }
    @GetMapping("/activity/{id}")
    public Activity getActivity(@PathVariable String id){
        return activityRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/activity")
    @ResponseStatus(HttpStatus.CREATED)
    public Activity addActivity(@RequestBody Activity activity){
        System.out.println(activity);
        return activityRepo.save(activity); //hvor returneres den til?
    }
    //post til ny, put til opdatering

    @PutMapping("/activity/{id}") //putmapping
    public ResponseEntity<Activity> updateActivity(@PathVariable String id, @RequestBody Activity activity) {
        Optional<Activity> activityOptional = activityRepo.findById(id);
        if (activityOptional.isPresent()) {
            activityRepo.save(activity);
            return new ResponseEntity<>(activity, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    } //erik kalder det skrammelkode fordi der er mange linjer. Heller en linje hvis man kan
}
