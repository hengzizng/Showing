package com.showing.backend.db.entity.performance;


import com.showing.backend.db.entity.CreatedTimeEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "season")
public class Season extends CreatedTimeEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "performance_id")
    private Performance performance;

    @Column
    private String interparkId;

    @Column(unique = true)
    private int playdbId;

    @Column
    private String seasonImage;

    @Column
    private LocalDateTime startDate;

    @Column
    private LocalDateTime endDate;

    @Column
    private String description;

    @Column
    private String location;

    @Column
    private String runningtime;

    @Column
    private String performanceAge;

    @Column
    private String detailType;

    @Column
    private int proceedFlag;

}